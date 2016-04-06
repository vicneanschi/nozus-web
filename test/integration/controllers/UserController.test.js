/**
 * Created by val on 2016-04-06.
 */
var request = require('supertest');

describe('UserController', function() {

    describe('/user/me should return not authorized when token is invalid', function() {
        it('should redirect to /mypage', function (done) {
            request(sails.hooks.http.app)
                .get('/user/me')
                .send({ token: 'foo' })
                .expect(403, done);
                
        });
    });

});
