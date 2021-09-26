
module.exports = {
    signUp: async function (input) {
        sails.log.info("@Service PeopleService @Method signUp",input);

        let isEmailExist = await people.getAllByCondition({email_id:input.email_id})

        if(_.size(isEmailExist))
            throw {message: "Given mail id already exists"}

        let isUserNameExist = await people.getAllByCondition({user_name:input.user_name})
        
        if(_.size(isUserNameExist))
            throw {message: "Given user name already exists"}

        let peopleRes = await people.add({user_name:input.user_name,email_id:input.email_id,first_name:input.first_name,role_id:input.role_id})
        
        let emailInput={}
        emailInput.email_id = input.email_id
        emailInput.subject = "You've been invited to join Vilaya2"
        emailInput.html = `<a href=`+process.env.HOT_LINK+peopleRes.id+`>Set Password</a>`
        await EmailService.sendMail(emailInput)
        return {message: "Sent a request to your registered Email to set password",statusCode:200}
    },
    setPassword: async function (input) {
        sails.log.info("@Service PeopleService @Method signUp",input);
        let peopleRes = await people.edit({id:input.id},{password:input.password})
        if(_.size(peopleRes))
            return {message: `Password setup done`,statusCode:200}
    }
}