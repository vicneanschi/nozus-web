/**
 * Created by val on 2016-04-06.
 */
describe('UserModel', function() {

    describe('#find()', function() {
        it('should check find function', function (done) {
            User.find()
                .then(function(results) {
                    // some tests
                    done();
                })
                .catch(done);
        });
    });

});
