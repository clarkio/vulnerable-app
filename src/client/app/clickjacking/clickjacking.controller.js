(function () {
    'use strict';

    angular
        .module('app.clickjacking')
        .controller('ClickjackingController', ClickjackingController);

    ClickjackingController.$inject = ['$q', 'userservice', 'logger'];
    /* @ngInject */
    function ClickjackingController($q, userservice, logger) {
        var vm = this;
        vm.title = 'Clickjacking';
        vm.deleteProfile = deleteProfile;

        activate();

        function activate() {
            logger.info('Activated Clickjacking View');
        }

        function deleteProfile() {
            logger.info('The profile was successfully deleted!');
        }
    }
})();
