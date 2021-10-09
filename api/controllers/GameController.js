module.exports = {
    getJourney: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method getJourney(req,res)");
        try {
            if (!req.user_id || req.user_id == undefined )
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameService.getJourney(req.user_id)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method getJourney @Message Error:", err);
            res.badRequest(err);
        }
    },
    getGame: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method getGame(req,res)");
        try {
            if (!req.user_id || req.user_id == undefined || !req.params.game_id || req.params.game_id == undefined )
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameService.getGame(req.params.game_id)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method getGame @Message Error:", err);
            res.badRequest(err);
        }
    },   
}