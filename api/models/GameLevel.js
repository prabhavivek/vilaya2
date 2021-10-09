
module.exports = {

    tableName: 'game_level',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        game_level: {
            type: 'string',
            required: true
        }
    },

    getOneByCondition: async function (condition) {
        return await GameLevel.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await GameLevel.find(condition);
    }
}
