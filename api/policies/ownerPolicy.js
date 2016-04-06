/**
 * Created by val on 2016-04-06.
 */
module.exports = function OwnerPolicy (req, res, next) {
    //sails.log('OwnerPolicy()');
    if (!req.user || !req.user.id) {
        req.logout();
        return res.send(500, new Error('req.user is not set'));
    }

    /*
     sails.log.verbose('OwnerPolicy user', req.user);
     sails.log.verbose('OwnerPolicy method', req.method);
     sails.log.verbose('OwnerPolicy req.body', req.body);
     */

    if ('POST' == req.method) {
        //req.body || (req.body = { });
        req.body.owner = req.user.id;
    }

    //sails.log.verbose('OwnerPolicy req.model', req.model);
    next();
};
