(function() {
    'use strict';

    angular
        .module('app.csrf')
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
                    url: '/csrf',
                    templateUrl: 'app/csrf/csrf.html',
                    controller: 'CsrfController',
                    controllerAs: 'vm',
                    title: 'CSRF',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-csrf"></i> Profile'
                    }
                }
            }
        ];
    }
})();
