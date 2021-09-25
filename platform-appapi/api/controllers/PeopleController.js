module.exports = {

    signUp: async function (req, res) {
		sails.log.info("@Controller PeopleController @Method signUp(req,res)");

        if(!req.body.first_name || req.body.first_name == undefined || !req.body.email_id || req.body.email_id == undefined || !req.body.user_name || req.body.user_name == undefined)
			return res.badRequest({message : "parameter(s) is missing"});

		try{
	       	let result = await PeopleService.signUp(req.body);
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