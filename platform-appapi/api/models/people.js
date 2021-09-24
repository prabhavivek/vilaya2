
module.exports = {

    tableName: 'people',

    attributes: {
        id: {
            type: 'number',
            required: true
        },
        user_name: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
        },
        first_name: {
            type: 'string',
            required: true
        },
        last_name: {
            type: 'string',
        },
        profile_picture:{
            type: 'string',
        }
    },

    getOneByCondition: async function (condition) {
        return await people.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await people.find(condition);
    },
    edit: async function (query, data) {
        return await people.update(query, data);
    },
}
