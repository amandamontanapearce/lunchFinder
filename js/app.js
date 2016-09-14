angular
  .module('app', ['ui-router', 'ui.bootstrap'])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl:"templates/home.html"
      })
  })
