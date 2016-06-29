/* jshint -W117, -W030 */
describe('csrf routes', function () {
    describe('state', function () {
        var view = 'app/csrf/csrf.html';

        beforeEach(function() {
            module('app.csrf', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state csrf to url /csrf ', function() {
            expect($state.href('csrf', {})).to.equal('/csrf');
        });

        it('should map /csrf route to csrf View template', function () {
            expect($state.get('csrf').templateUrl).to.equal(view);
        });

        it('of csrf should work with $state.go', function () {
            $state.go('csrf');
            $rootScope.$apply();
            expect($state.is('csrf'));
        });
    });
});
