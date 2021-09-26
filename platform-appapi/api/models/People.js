
module.exports = {

    tableName: 'people',

    attributes: {
        id: {
            type: 'number',
            autoIncrement: true
        },
        user_name: {
            type: 'string',
            required: true
        },
        email_id:{
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
        },
        role_id:{
            type: 'number',
            required: true
        }
    },

    getOneByCondition: async function (condition) {
        return await People.findOne(condition);
    },
    getAllByCondition: async function (condition) {
        return await People.find(condition);
    },
    edit: async function (query, data) {
        return await People.update(query, data).fetch();
    },
    add: async function(input){
        return await People.create(input).fetch();
    },
}
