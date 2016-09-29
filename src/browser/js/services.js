(function() {
  'use strict';

  const app = angular.module('editorApp');
  const server = 'http://localhost:8000/api/users';

  app.factory('users', users);
  users.$inject = ['$http'];

  function users($http) {
    return {
      get: () => {
        return $http.get(server)
        .then((res) => {
          console.log('res.data', res.data);
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
      },
    }
  };
})();
