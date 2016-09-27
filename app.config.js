angular
    .module('myApp', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyAuEZexMewzZ4rne2DYkCPS8Q-hJhhu_pY',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                controller: "findController",
                templateUrl: "find/home.html"
            })
            .state('results', {
                url: '/results',
                params: {
                    places: null
                },
                controller: "resultsController",
                templateUrl: "results/results.html"
            })
    })
