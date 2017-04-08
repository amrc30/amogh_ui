'use strict';


app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider
    .otherwise('/home');              // default path

  $stateProvider                      // routes to states

    .state('home', {
      url: '/home',
      templateUrl: 'main.html',
      controller: 'sampleCtrl as home',

    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'contact-list.html',
      controller: 'sampleContactCtrl'

    })
});
