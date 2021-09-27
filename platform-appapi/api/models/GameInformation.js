
module.exports = {

    tableName: 'game_information',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        game_name: {
            type: 'string',
            required: true
        },
        game_profile_picture: {
            type: 'string',
        },
        discription:{
            type: 'string',
        },
        is_published: {
            type: 'boolean'
        },
        user_id: {
            type: 'number',
            required: true
        },
        game_type_id: {
            type: 'number',
            required: true
        },
        game_level_id: {
            type: 'number',
            required: true
        },
    },

    getOneByCondition: async function (condition) {
        return await GameInformation.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await GameInformation.find(condition);
    },
    edit: async function (query, data) {
        return await GameInformation.update(query, data).fetch();
    },
    add: async function(input){
        return await GameInformation.create(input).fetch();
    },
    delete: async function(input){
        return await GameInformation.destroyOne(input)	
    }
}
