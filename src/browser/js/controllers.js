/* globals angular, require */
/* eslint-disable no-invalid-this */
(function() {
  'use strict';

  angular.module('editorApp')
  .controller('EditorController', ($scope, $location) => {
    const electron = require('electron');

    const ipc = electron.ipcRenderer;

    ipc.on('edit', (event, args) => {
      $location.path(args);
      $scope.$apply();
    });
  })
  .controller('UsersController', function(users) {
    users.get()
    .then((data) => {
      this.users = data;
    })
    .catch((err) => {
      throw err;
    });
  })
  .controller('UsersFormController', function(users, $routeParams) {
    const { id } = $routeParams;
    console.log('id', id);
  })
  .controller('PuzzlesController', function($routeParams) {
    const { id } = $routeParams
    this.puzzles = [{
      id: 1, imageUrl: 'img/image1'
    }, {
      id: 2, imageUrl: 'img/image2'
    }, {
      id: 3, imageUrl: 'img/image3'
    }, {
      id: 4, imageUrl: 'img/image4'
    }];
  })
  ;
})();
