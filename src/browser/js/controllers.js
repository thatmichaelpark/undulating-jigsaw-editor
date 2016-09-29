/* globals angular, require */
/* eslint-disable no-invalid-this */
(function() {
  'use strict';

  angular.module('editorApp')
  .controller('EditorController', function($scope) {
    const electron = require('electron');

    const ipc = electron.ipcRenderer;

    ipc.on('edit', (event, args) => {
      this.view = args; // 'users' or 'puzzles'
      $scope.$apply();
    });
    this.view = 'puzzles';
  })
  .controller('UsersController', function(users) {
    users.get()
    .then((data) => {
      console.log(data);
      this.users = data;
    })
    .catch((err) => {
      throw err;
    });

  })
  .controller('PuzzlesController', function() {
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
