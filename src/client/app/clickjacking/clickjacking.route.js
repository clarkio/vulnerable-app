(function() {
    'use strict';

    angular
        .module('app.clickjacking')
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
                    url: '/clickjacking',
                    templateUrl: 'app/clickjacking/clickjacking.html',
                    controller: 'ClickjackingController',
                    controllerAs: 'vm',
                    title: 'Clickjacking',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-clickjacking"></i> Delete it All!'
                    }
                }
            }
        ];
    }
})();
