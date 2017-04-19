var homeModule = angular.module('home', []);

homeModule
    .component('home', require('./home.component'));

module.exports = homeModule.name;