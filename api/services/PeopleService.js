var jwt = require('jsonwebtoken');

module.exports = {
    signUp: async function (input) {
        sails.log.info("@Service PeopleService @Method signUp",input);

        let isEmailExist = await People.getAllByCondition({email_id:input.email_id})

        if(_.size(isEmailExist))
            throw {message: "Given mail id already exists"}

        let isUserNameExist = await People.getAllByCondition({user_name:input.user_name})
        
        if(_.size(isUserNameExist))
            throw {message: "Given user name already exists"}
        let query = {user_name:input.user_name,email_id:input.email_id,first_name:input.first_name,role_id:input.role_id}
        
        if(input.last_name)
            query.last_name = input.last_name
        let peopleRes = await People.add(query)
        
        let emailInput={}
        emailInput.email_id = input.email_id
        emailInput.subject = "You've been invited to join Vilaya2"
        emailInput.html = `<a href=`+process.env.HOT_LINK+peopleRes.id+`>Set Password</a>`
        await EmailService.sendMail(emailInput)
        return {message: "Sent a request to your registered Email to set password",statusCode:200}
    },
    setPassword: async function (input) {
        sails.log.info("@Service PeopleService @Method signUp",input);
        let peopleRes = await People.edit({id:input.id},{password:input.password})
        if(_.size(peopleRes))
            return {message: `Password setup done`,statusCode:200}
    },
    signIn: async function (input) {
        sails.log.info("@Service PeopleService @Method signIn",input);
        let query = input.email_id ? {email_id:input.email_id,password:input.password} : {user_name:input.user_name,password:input.password}
        let peopleRes = await People.getOneByCondition(query)
        if(!_.size(peopleRes))
            throw {statusCode:403,message: "Email id or password wrong"}
        peopleRes.token = jwt.sign({user_id:peopleRes.id},'my_secret_key')
        delete peopleRes.id;
        return  {statusCode:200,userData:peopleRes}
    }

}