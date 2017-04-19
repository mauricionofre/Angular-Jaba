/* @ngInject */
module.exports = function layoutRoutes($stateProvider){
   $stateProvider
       .state('app', {
           url: '',
           abstract: true,
           template: '<layout></layout>',
           resolve: {
                lazyLoad: require('jaba-lazy!./layout.module')
            }
       })
}