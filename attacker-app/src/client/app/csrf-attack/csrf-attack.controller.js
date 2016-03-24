(function () {
    'use strict';

    angular
        .module('app.csrf-attack')
        .controller('CsrfController', CsrfController);

    CsrfController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function CsrfController($q, logger) {
        var vm = this;
        vm.title = 'CSRF-Attack';
    }
})();
