(function () {
    'use strict';

    angular
        .module('app.csrf')
        .controller('CsrfController', CsrfController);

    CsrfController.$inject = ['$q', 'userservice', 'logger'];
    /* @ngInject */
    function CsrfController($q, userservice, logger) {
        var vm = this;
        vm.title = 'CSRF';
        vm.user = {
            firstName: 'Test',
            lastName: 'Test'
        };
        vm.updateProfile = updateProfile;
        vm.getProfile = getProfile;

        activate();

        function activate() {
            logger.info('Activated CSRF View');
            getProfile();
        }

        function updateProfile(user) {
            console.log('First: ', user.firstName);
            console.log('Last: ', user.lastName);
            console.log('User Profile: ', JSON.stringify(user));
            userservice.updateProfile(user)
                .then(function(response) {
                    logger.info('Successfully updated the user profile');
                })
                .catch(function(error) {
                    logger.error('There was an error updating the user profile: ', error);
                });
        }

        function getProfile() {
            userservice.getProfile()
                .then(function(response) {
                    logger.info('Received profile data: ', response);
                    vm.user = response;
                })
                .catch(function(error) {
                    logger.error(error);
                });
        }
    }
})();
