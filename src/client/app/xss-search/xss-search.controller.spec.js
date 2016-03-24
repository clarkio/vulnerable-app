/* jshint -W117, -W030 */
describe('XssSearchController', function() {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function() {
        bard.appModule('app.xss-search');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPeople').returns($q.when(people));
        controller = $controller('XssSearchController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('XssSearch controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of XssSearch', function () {
                expect(controller.title).to.equal('XSS Search');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
