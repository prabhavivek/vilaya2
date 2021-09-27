module.exports = {
    createGame: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method createGame(req,res)");
        try {
            if (!req.user_id || req.user_id == undefined || !req.body.game_name || req.body.game_name == undefined || !req.body.game_level_id || req.body.game_level_id == undefined || !req.body.game_type_id || req.body.game_type_id == undefined)
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameManagerService.createGame(req.user_id, req.body)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method createGame @Message Error:", err);
            res.badRequest(err);
        }
    },
    getGameList: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method getGameList(req,res)");

        try {
            if (!req.user_id || req.user_id == undefined)
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameManagerService.getGameList(req.user_id)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method getGameList @Message Error:", err);
            res.badRequest(err);
        }
    },
    publish: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method publish(req,res)",req.body);
        try {
            if (!req.user_id || req.user_id == undefined  || req.body.is_publish == undefined || !req.body.game_id || req.body.game_id == undefined)
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameManagerService.publish(req.user_id,req.body)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method publish @Message Error:", err);
            res.badRequest(err);
        }
    },
    deleteGame: async function(req, res){
        sails.log.info("@Controller GameManagerController @Method deleteGame(req,res)");
        try {
            if (!req.user_id || req.user_id == undefined || !req.params.game_id)
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameManagerService.deleteGame(req.user_id,req.params.game_id)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method deleteGame @Message Error:", err);
            res.badRequest(err);
        }
    },
    editGame: async function(req, res){
        sails.log.info("@Controller GameManagerController @Method editGame(req,res)");
        try {
            if (!req.body.game_id || req.body.game_id == undefined || !req.body.game_name || req.body.game_name == undefined || !req.body.game_level_id || req.body.game_level_id == undefined)
                return res.badRequest({ message: "parameter(s) is missing" });
            let result = await GameManagerService.editGame(req.body)
            res.json(result);
        } catch (err) {
            sails.log.error("@Controller PeopleController @Method editGame @Message Error:", err);
            res.badRequest(err);
        }
    }
}