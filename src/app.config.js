/* @ngInject */
module.exports = function ($httpProvider, $urlRouterProvider, $locationProvider, $compileProvider, $qProvider) {
    // Redirecionar para a tela de bem-vindo caso nenhuma rota seja especificada
    // ou seja uma rota inválida.
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('app.home');
    });
    $compileProvider.preAssignBindingsEnabled(true);   // compatibilidade com angular < 1.6
    $qProvider.errorOnUnhandledRejections(false);
    $locationProvider.html5Mode(true);
}