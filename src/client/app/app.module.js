(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.dashboard',
        'app.xss-search',
        'app.csrf',
        'app.clickjacking',
        'app.layout'
    ]);

})();
