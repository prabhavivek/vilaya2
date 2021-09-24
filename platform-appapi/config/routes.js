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
    'POST  /user/sign/in'                    :  'PeopleController.signIn',
    'POST /user/sign/out'                   :  'PeopleController.signOut',
    'POST /user/upload/profile/image'       :  'PeopleController.uploadProfile',

    //GameManagerController
    'GET  /manager/game/list'               :  'GameManagerController.getGameList',
    'POST /manager/game/details'            :  'GameManagerController.uploadGame',
    'PUT  /manager/game/edit'               :  'GameManagerController.editGame',
    'POST /manager/game/publish'            :  'GameManagerController.publish',
    'DELETE /manager/game/delete'           :  'GameManagerController.deleteGame',
    'POST   /manager/game/invite/people'     :  'GameManagerController.invitePeople',

    //GameController
    'GET /game/game/journey'                :   'GameController.getJourney',
    'GET /game/game'                        :   'GameController.getGame',
};
