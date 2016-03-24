(function () {
    'use strict';

    angular
        .module('app.clickjacking')
        .controller('ClickjackingController', ClickjackingController);

    ClickjackingController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function ClickjackingController($q, dataservice, logger) {
        var vm = this;
        vm.title = 'Clickjacking';

        activate();

        function activate() {
            logger.info('Activated Clickjacking View');
        }
    }
})();
