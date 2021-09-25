const people = require("../models/people");

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
        return peopleRes
    }
}