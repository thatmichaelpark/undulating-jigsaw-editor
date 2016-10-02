/* globals angular */
(function() {
  'use strict';

  const app = angular.module('editorApp');

  const users = function($http) {
    const server = 'http://localhost:8000/api/users';
    const tokenServer = 'http://localhost:8000/api/token';

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
        }),
      patch: (id, data) =>
        $http.patch(`${server}/${id}`, data)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        }),
      login: (username, password) =>
        $http.post(tokenServer, { username, password })
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
        }),
      post: (data) =>
        $http.post(server, data)
        .then((res) =>
          res.data
        )
        .catch((err) => {
          throw err;
        }),
      patch: (id, data) =>
        $http.patch(`${server}/${id}`, data)
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
