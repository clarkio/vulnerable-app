/* jshint -W117, -W030 */
describe('xss-search routes', function () {
    describe('state', function () {
        var view = 'app/xss-search/xss-search.html';

        beforeEach(function() {
            module('app.xss-search', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state xss-search to url /xss-search ', function() {
            expect($state.href('xss-search', {})).to.equal('/xss-search');
        });

        it('should map /xss-search route to xss-search View template', function () {
            expect($state.get('xss-search').templateUrl).to.equal(view);
        });

        it('of xss-search should work with $state.go', function () {
            $state.go('xss-search');
            $rootScope.$apply();
            expect($state.is('xss-search'));
        });
    });
});
