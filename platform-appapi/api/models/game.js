
module.exports = {

    tableName: 'game',

    attributes: {
        id: {
            type: 'number',
            required: true
        },
        game_type: {
            type: 'number',
            required: true
        },
        question: {
            type: 'string',
        },
        answer: {
            type: 'string',
        },
        game_id: {
            type: 'number',
            required: true
        },
    },

    getOneByCondition: async function (condition) {
        return await game.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await game.find(condition);
    },
    edit: async function (query, data) {
        return await game.update(query, data);
    },
}
