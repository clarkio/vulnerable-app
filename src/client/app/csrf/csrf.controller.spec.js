/* jshint -W117, -W030 */
describe('CsrfController', function() {
    var controller;
    var profile = mockData.getMockProfile();

    beforeEach(function() {
        bard.appModule('app.csrf');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'userservice');
    });

    beforeEach(function () {
        sinon.stub(userservice, 'getProfile').returns($q.when(profile));
        sinon.stub(userservice, 'updateProfile').returns($q.when(profile));
        controller = $controller('CsrfController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Csrf controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Csrf', function () {
                expect(controller.title).to.equal('CSRF');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
