(function () {
    'use strict';

    angular
        .module('app.clickjacking-attack')
        .controller('ClickjackingController', ClickjackingController);

    ClickjackingController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function ClickjackingController($q, logger) {
        var vm = this;
        vm.title = 'Clickjacking-Attack';
    }
})();
