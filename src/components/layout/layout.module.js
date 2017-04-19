var layout = angular.module('layout', [
    require('components/navbar/navbar.module')
]);

layout.component('layout', require('./layout.component'));

module.exports = layout.name;