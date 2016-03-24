/* jshint -W117, -W030 */
describe('CsrfController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.csrf-attack');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPeople').returns($q.when(people));
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
                expect(controller.title).to.equal('CSRF-Attack');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have news', function () {
                expect(controller.news).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.people).to.have.length.above(0);
            });

            it('should have people count of 5', function () {
                expect(controller.people).to.have.length(7);
            });
        });
    });
});
