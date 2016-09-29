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
  .controller('UsersController', function() {
    this.users = [{
      id: 1, username: 'user1'
    }, {
      id: 2, username: 'user2'
    }, {
      id: 3, username: 'user3'
    }, {
      id: 4, username: 'user4'
    }];
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
