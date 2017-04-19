require('expose?jQuery!expose?$!jquery');

var angular = require('angular');
require('angular-loading-bar');
require('bootstrap');
require('angular-i18n/angular-locale_pt-br');

var app = angular.module('nddResearchAppSeed', [
    'cfp.loadingBar',
    'ngLocale',
    require('oclazyload'),
    require('angular-ui-router')
]);

// Configurações padrão da aplicação
app.config(require('./app.config'));

app.run(require('./app.run'));

// Pega todos os arquivos terminados em routes.js
// dentro da pasta app ou sub-pastas e os executa
// na etapa de configuração.
// É necessário para o lazyload funcionar.
var req = require.context('./', true, /routes.js$/);
req.keys().forEach(function (file) {
    app.config(req(file));
});

// Obtém todos os arquivos terminados em .scss
require.ensure([], function (require) {
    var req = require.context('./', true, /\.scss$/);
    req.keys().forEach(function (file) {
        req(file);
    });
}, 'defaultTheme');

module.exports = app;