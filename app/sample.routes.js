'use strict';


app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider
    .otherwise('/home');              // default path

  $stateProvider                      // routes to states

    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'sampleCtrl as home',

    })
    .state('chart', {
      url: '/chart?cid',
      templateUrl: 'chart.html',
      controller: 'sampleContactCtrl'
      // depends: ['nvd3']

    })
    
    
});
// app.run(function($state, $q) {
//   $state.dependencyLoaders.push(function(depends) {
//       var notify = $q.defer();
//       var toPaths = moduleSpecificMethodToConvertDependsToPaths;
//       var paths = toPaths(depends);

//       if (!paths || !paths.length) {
//           // This module doesn't know anything about any of these dependencies
//           return;
//       }

//       // Example: use require.js to load dependencies:
//       require(toPaths(dependency), function() {
//           notify.resolve();
//       });
//       return notify.promise;
//   });
// })