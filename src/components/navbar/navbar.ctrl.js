/* @ngInject */
module.exports = function navbarController($state) {
    var self = this;

    self.dropdownOptions = {
        button: {
            text: 'Seed',
        },
        menu: [
            {
                text: 'Home',
                action: toHome,
                icon: 'fa fa-home'
            },
            {
                text: 'Service',
                action: toHome,
                icon: 'fa fa-cogs'
            },
            {
                text: 'Contact',
                action: toHome,
                icon: 'fa fa-phone'
            },
            {
                text: 'Sair',
                icon: 'fa fa-sign-out'
            }
        ]
    };

    function toHome(){
        $state.go('app.home');
    }
}