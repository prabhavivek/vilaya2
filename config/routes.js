/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    //PeopleController
    'POST /user/sign/up'                    :  'PeopleController.signUp',
    'POST /user/setpassword'                :  'PeopleController.setPassword',
    'POST  /user/sign/in'                   :  'PeopleController.signIn',
    'POST /user/sign/out'                   :  'PeopleController.signOut',
    'POST /user/upload/profile/image'       :  'PeopleController.uploadProfile',

    //GameManagerController
    'POST /manager/game/create/game'        :  'GameManagerController.createGame',
    'GET  /manager/game/list'               :  'GameManagerController.getGameList',
    'POST /manager/game/publish'            :  'GameManagerController.publish',
    'DELETE /manager/game/delete/:game_id'  :  'GameManagerController.deleteGame',
    'PUT  /manager/game/edit'               :  'GameManagerController.editGame',
    
    //GameController
    'GET /game/game/journey'                :   'GameController.getJourney',
    'GET /game/game/:game_id'               :   'GameController.getGame',
};
