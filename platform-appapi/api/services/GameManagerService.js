module.exports = {
    createGame: async function (user_id,input) {
        sails.log.info("@Service PeopleService @Method createGame");
        let gameInfoResponse = await GameInformation.add({user_id:user_id,game_name:input.game_name,game_type_id:input.game_type_id,game_level_id:input.game_level_id,discription:input.discription,game_profile_picture:input.game_profile_picture})
        let gameData = input.game_data
        gameData.forEach(element => {
            element.game_id=gameInfoResponse.id
        });
        await GameData.addAll(gameData) 
        return {statusCode:200,message:"Game created successfully"}
    }
}