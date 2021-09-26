module.exports = {
    createGame: async function (req, res) {
        sails.log.info("@Controller GameManagerController @Method createGame(req,res)");
        if (!req.user_id || req.user_id == undefined || !req.body.game_name || req.body.game_name == undefined || !req.body.game_level_id || req.body.game_level_id == undefined || !req.body.game_type_id || req.body.game_type_id == undefined)
            return res.badRequest({ message: "parameter(s) is missing" });
        let result = await GameManagerService.createGame(req.user_id, req.body)
        res.json(result);
    }
}