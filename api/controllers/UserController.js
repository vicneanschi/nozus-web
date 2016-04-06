/**
 * UserController
 * @description :: Server-side logic for manage users
 */

module.exports = {
    me: function(req, res){
        res.ok(req.user);
    }
};
