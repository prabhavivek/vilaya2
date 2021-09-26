var jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    if (!req.headers || !req.headers.authorization) {
        sails.log.info("@Policy isLoggin @Method validate @Message (req, res): ---------------------------------------- START");
        sails.log.error("@Policy isLoggin @Method validate @Message req.path :", req.path);
        sails.log.info("@Policy isLoggin @Method validate @Message (req, res): ---------------------------------------- END");
        return res.forbidden();
    }
    let token = req.headers.authorization.split(' ')[1];
    try {
        jwt.verify(token, 'my_secret_key', (error, data) => {
                req.user_id = data['user_id']
        })
        next()
    } catch (error) {
        sails.log.error("@Policy isLogggedIn @Method verify @Message Error:", error);
        return res.badRequest({ message: "You are not authorized." });
    }

}