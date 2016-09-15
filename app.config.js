
angular
  .module('myApp', ['ui.router', 'ui.bootstrap'])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        controller: "findController",
        templateUrl:"find/home.html"
      })
  })
