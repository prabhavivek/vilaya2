
module.exports = {

    tableName: 'game_data',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        game_id: {
            type: 'number',
            required: true
        },
        question: {
            type: 'string',
        },
        answer: {
            type: 'string',
        },
    },

    getOneByCondition: async function (condition) {
        return await GameData.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await GameData.find(condition);
    },
    edit: async function (query, data) {
        return await GameData.update(query, data);
    },
    add: async function(input){
        return await GameData.create(input).fetch();
    },
    addAll:async function(input){
        return await GameData.createEach(input)
    }
}
