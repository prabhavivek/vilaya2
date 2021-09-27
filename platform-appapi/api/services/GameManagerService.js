const GameData = require("../models/GameData");
const GameInformation = require("../models/GameInformation");

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
    },
    getGameList: async function (user_id) {
        sails.log.info("@Service PeopleService @Method getGameList");
        let gameInfo =await GameInformation.getAllByCondition({user_id:user_id})
        return {published_games:_.partition(gameInfo,{is_published:true})[0],un_published_games:_.partition(gameInfo,{is_published:true})[1]}
    },
    publish: async function (user_id,input) {
        sails.log.info("@Service PeopleService @Method publish",input);
        let gameRes = await  GameInformation.getOneByCondition({user_id:user_id,id:input.game_id})
        if(!_.size(gameRes))
            throw {statusCode:403, message:"You are not authorized to perform this action"}
        let gameDataCount = await GameData.recordCount({game_id:input.game_id})
        if(gameDataCount <  25)
            throw {statusCode:410,message:"Uploaded data is less than 25 so you can't publish the game"}
        let gameEditRes=await GameInformation.edit({id:input.game_id},{is_published:input.is_publish})
        return  {statusCode:200,message:gameEditRes[0].is_published ?'Game published successfully':'Game unpublished successfully'}
    },
    deleteGame: async function(user_id,game_id){
        sails.log.info("@Service PeopleService @Method deleteGame",user_id,game_id);
        await GameData.delete({game_id:game_id})
        await GameInformation.delete({id:game_id})
        return {statusCode:200,message:"Game Deleted successfully"}
    },
    editGame: async function(input){
        sails.log.info("@Service PeopleService @Method editGame",input);
        await GameInformation.edit({id:input.game_id},{game_name:input.game_name,discription:input.discription,game_profile_picture:input.game_profile_picture,game_level_id:input.game_level_id})
        input.game_data.forEach(async element => {
            await GameData.edit({id:element.id},{question:element.question,answer:element.answer})
        });
        return {statusCode:200,message:"Game updated successfully"}
    }
}