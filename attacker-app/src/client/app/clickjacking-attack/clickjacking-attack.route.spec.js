/* jshint -W117, -W030 */
describe('clickjacking routes', function () {
    describe('state', function () {
        var view = 'app/clickjacking-attack/clickjacking-attack.html';

        beforeEach(function() {
            module('app.clickjacking-attack', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state clickjacking to url / ', function() {
            expect($state.href('clickjacking', {})).to.equal('/');
        });

        it('should map /clickjacking route to clickjacking View template', function () {
            expect($state.get('clickjacking').templateUrl).to.equal(view);
        });

        it('of clickjacking should work with $state.go', function () {
            $state.go('clickjacking');
            $rootScope.$apply();
            expect($state.is('clickjacking'));
        });
    });
});
