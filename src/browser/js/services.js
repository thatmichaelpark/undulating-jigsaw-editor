/* globals angular */
(function() {
  'use strict';

  const app = angular.module('editorApp');

  const users = function($http) {
    const server = 'http://localhost:8000/api/users';

    return {
      get: () =>
        $http.get(server)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        }),
      delete: (id) =>
        $http.delete(`${server}/${id}`)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        })
    };
  };

  app.factory('users', users);
  users.$inject = ['$http'];

  const puzzles = function($http) {
    const server = 'http://localhost:8000/api/puzzles';

    return {
      get: () =>
        $http.get(server)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        }),
      getOne: (id) =>
        $http.get(`${server}/${id}`)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        }),
      delete: (id) =>
        $http.delete(`${server}/${id}`)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        })
    };
  };

  app.factory('puzzles', puzzles);
  puzzles.$inject = ['$http'];
})();
