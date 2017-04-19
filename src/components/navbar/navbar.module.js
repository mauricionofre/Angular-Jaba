var navbar = angular.module('navbar', [
    require('angular-ui-router')
]);

navbar.component('navbar', require('./navbar.component'));

module.exports = navbar.name;
