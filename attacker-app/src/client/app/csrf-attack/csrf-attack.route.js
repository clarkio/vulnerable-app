(function() {
    'use strict';

    angular
        .module('app.csrf-attack')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'csrf',
                config: {
                    url: '/',
                    templateUrl: 'app/csrf-attack/csrf-attack.html',
                    controller: 'CsrfController',
                    controllerAs: 'vm',
                    title: 'CSRF-Attack',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-csrf"></i> CSRF-Attack'
                    }
                }
            }
        ];
    }
})();
