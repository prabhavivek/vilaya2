module.exports = {
    getJourney: async function (user_id) {
        sails.log.info("@Controller GameService @Method getJourney");
        return await GameInformation.getAllByCondition({user_id:user_id,is_published:true})
    },
    getGame: async function (game_id) {
        sails.log.info("@Controller GameService @Method getJourney");
        return await GameData.getAllByCondition({game_id:game_id})
    }
}