module.exports = function (req, res, next) {

    res.unauthorized(null, null, 'You must be logged in as admin for this action.');

};
