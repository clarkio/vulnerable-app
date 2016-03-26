(function() {
    'use strict';

    angular
        .module('app.clickjacking-attack')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'clickjacking',
                config: {
                    url: '/',
                    templateUrl: 'app/clickjacking-attack/clickjacking-attack.html',
                    controller: 'ClickjackingController',
                    controllerAs: 'vm',
                    title: 'Clickjacking-Attack',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-clickjacking"></i> Clickjacking-Attack'
                    }
                }
            }
        ];
    }
})();
