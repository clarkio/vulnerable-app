(function () {
    'use strict';

    angular
        .module('app.xss-search')
        .controller('XssSearchController', XssSearchController);

    XssSearchController.$inject = ['$q', '$sanitize', '$sce', 'dataservice', 'logger'];
    /* @ngInject */
    function XssSearchController($q, $sanitize, $sce, dataservice, logger) {
        var vm = this;
        vm.title = 'XSS Search';
        vm.search = search;
        vm.searchResults = undefined;

        activate();

        function activate() {
            logger.info('Activated XSS Search View');
        }

        function search(searchTerm) {
            // Intentionally trusting as HTML for demonstration purposes
            vm.searchResults = $sce.trustAsHtml(searchTerm);
        }
    }
})();
