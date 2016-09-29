/* globals angular */
(function() {
  'use strict';

  const app = angular.module('editorApp');

  app.config(($routeProvider) => {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html'
    })
    .when('/puzzles', {
      templateUrl: 'partials/puzzles.html',
      controller: 'PuzzlesController',
      controllerAs: 'puzzlesController'
    })
    .when('/users', {
      templateUrl: 'partials/users.html',
      controller: 'UsersController',
      controllerAs: 'usersController'
    });
  });
})();
