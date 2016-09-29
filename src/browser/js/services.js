/* globals angular */
(function() {
  'use strict';

  const app = angular.module('editorApp');
  const server = 'http://localhost:8000/api/users';

  const users = function($http) {
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
})();
