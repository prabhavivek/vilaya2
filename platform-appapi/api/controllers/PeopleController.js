module.exports = {

    signUp: async function (req, res) {
		sails.log.info("@Controller PeopleController @Method signUp(req,res)");
        if(!req.body.firstName || req.body.firstName == undefined || !req.body.emailId || req.body.emailId == undefined || !req.body.userName || req.body.userName == undefined)
            return;
        let input = {}
        input.firstName = req.body.firstName;
        input.lastName  = req.body.lastName;
        input.userName = req.body.userName;
        input.emailId   = req.body.emailId;
		try{
	       	let result = await PeopleService.signUp(input);
			res.json(result);
		}catch(err){
			sails.log.error("@Controller PeopleController @Method signUp @Message Error:", err);
			res.badRequest(err);
		}
	},

    signIn: async function (req, res) {
		sails.log.info("@Controller PeopleController @Method signIn(req,res)");
		try{
	       	let result = await PeopleService.signUp(input);
			res.json(result);
		}catch(err){
			sails.log.error("@Controller PeopleController @Method signIn @Message Error:", err);
			res.badRequest(err);
		}
	},
    
}