
(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('userservice', userservice);

    userservice.$inject = ['$rootScope', '$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function userservice($rootScope, $http, $q, exception, logger) {
        var service = {
            login: login,
            logout: logout,
            updateProfile: updateProfile,
            getProfile: getProfile
        };

        return service;

        function getProfile() {
            return $http.get('/api/user/profile')
                .then(function(response) {
                    return response.data;
                })
                .catch(fail);
        }

        function updateProfile(profile) {
            return $http.post('/api/user/profile', profile)
                .then(function(response) {
                    return response.data;
                })
                .catch(fail);
        }

        function logout() {
            return $http.post('/api/user/logout')
                .then(function(response) {
                    $rootScope.isLoggedIn = true;
                    return response.data;
                })
                .catch(fail);
        }

        function login() {
            return $http.post('/api/user/login')
                .then(function(response) {
                    $rootScope.isLoggedIn = false;
                    return response.data;
                })
                .catch(fail);
        }

        function fail(e) {
            return exception.catcher('XHR Failed')(e);
        }
    }
})();
