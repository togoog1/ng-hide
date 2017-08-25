var myapp;
(function (myapp) {
    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
            url: '/',
            templateUrl: '/ngApp/views/login.html',
            controller: myapp.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: myapp.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('home', {
            url: '/home',
            templateUrl: '/ngApp/views/home.html',
            controller: myapp.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(myapp || (myapp = {}));
