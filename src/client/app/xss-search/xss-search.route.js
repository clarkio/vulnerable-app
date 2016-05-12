(function() {
    'use strict';

    angular
        .module('app.xss-search')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'xss-search',
                config: {
                    url: '/xss-search',
                    templateUrl: 'app/xss-search/xss-search.html',
                    controller: 'XssSearchController',
                    controllerAs: 'vm',
                    title: 'XSS Search',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-xss-search"></i> Search'
                    }
                }
            }
        ];
    }
})();
