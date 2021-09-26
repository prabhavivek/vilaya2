
module.exports = {

    tableName: 'game_type',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        game_type: {
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
