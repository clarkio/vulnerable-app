(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($rootScope, $timeout, userservice) {
            var vm = this;
            vm.isLoggedIn = $rootScope.isLoggedIn;
            vm.user = undefined;
            vm.logout = logout;
            vm.login = login;

            activate();

            function activate() {
                login();
            }

            function logout() {
                $rootScope.showSplash = true;
                userservice.logout()
                    .then(function(response) {
                        $rootScope.isLoggedIn = false;
                        vm.isLoggedIn = false;
                        vm.user = undefined;
                        console.log($rootScope.isLoggedIn);
                        console.log(vm.isLoggedIn);
                        hideSplash();
                    })
                    .catch(function(error) {
                        console.log('ERROR: ', error);
                    });
            }

            function login() {
                $rootScope.showSplash = true;
                userservice.login()
                    .then(function(response) {
                        $rootScope.isLoggedIn = true;
                        vm.isLoggedIn = true;
                        sessionStorage.setItem('userAuthToken', response);
                        console.log('login response: ', response);
                        vm.user = response;
                        hideSplash();
                    })
                    .catch(function(error) {
                        console.log('ERROR: ', error);
                    });
            }

            function hideSplash() {
                //Force a 1 second delay so we can see the splash.
                $timeout(function() {
                    $rootScope.showSplash = false;
                }, 1000);
            }
        }

        return directive;
    }
})();
