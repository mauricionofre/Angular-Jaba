/* @ngInject */
module.exports = function homeRoutes($stateProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            template: '<home></home>',
            breadcrumb: "Home",
            resolve: {
                lazyLoad: require('jaba-lazy!./home.module')
            }
        })
}