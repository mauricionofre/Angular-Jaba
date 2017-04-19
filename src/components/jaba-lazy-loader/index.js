/*
 * jaba-lazy-loader
 * 
 * Loader para o carregamento assíncrono de módulos do angular 1.x. 
 * 
 * Encapsula o código para o carregamento lazy loading em tempo de execução do angular --com o $ocLazyLoad -- para utilização no webpack.
 * 
 * @params n/a
 * 
 * @return um array contendo as dependências e a função para carregar assincronamente um módulo do angular.
 * 
 * Obs: Loaders devem retornar String ou Buffer. O webpack que é responsável por realizar o evaluate para a aplicação.
 * 
 * Mais detalhes em:
 * 
 * http://webpack.github.io/docs/how-to-write-a-loader.html
 * 
 * http://webpack.github.io/docs/loaders.html
 * 
 */

module.exports = function (content) {
    this.cacheable && this.cacheable();
    // path do arquivo que foi requerido
    var fileToBundle = this.resource.replace(this.context, '').replace('\\', '/');
    // bundler é a função que define um novo chunck
    var bundler = ["$q", "$ocLazyLoad", "cfpLoadingBar", function ($q, $ocLazyLoad, cfpLoadingBar) {
        cfpLoadingBar.start();
        var deferred = $q.defer();
        require.ensure([], function (require) {
            var mod = require(FILE_TO_BUNDLE);
            // Evaluate o modulo carregado em tempo de execução.
            $ocLazyLoad.load({
                name: mod
            });
            cfpLoadingBar.complete();
            deferred.resolve(mod + ' loaded');
        });
        return deferred.promise;
    }];
    // remove a função do bundler, transforma ela em string e substitui o FILE_TO_BUNDLE pelo path
    var newFunctionBundler = (bundler.pop() + '').replace('FILE_TO_BUNDLE', '\'.' + fileToBundle + '\'')
    // Transforma em string as dependencias do bundler e insere a nova função do bundler na string
    var completeBundler = JSON.stringify(bundler).replace(']', "," + newFunctionBundler + ']');
    // retorna a string contendo o código para exportar o bundler
    return 'module.exports = ' + completeBundler;   // string com o bundler - será feito o eval pelo webpack e a aplicação recebe o array.
};
