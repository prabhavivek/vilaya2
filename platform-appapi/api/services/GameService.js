module.exports = {
    getJourney: async function (user_id) {
        sails.log.info("@Controller GameService @Method getJourney",input);
        let gameInfo = await GameInformation.getAllByCondition({user_id:user_id,is_published:true})
    }
}