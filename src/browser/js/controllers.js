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
  .controller('UsersController', function(users, $location) {
    const loadUsers = () => {
      users.get()
      .then((data) => {
        this.users = data;
      })
      .catch((err) => {
        throw err;
      });
    }

    loadUsers();

    this.click = function(id) {
      users.delete(id)
      .then((data) => {
        loadUsers();
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    };
  })
  .controller('UsersFormController', function(users, $routeParams) {
    const { id } = $routeParams;
    console.log('id', id);
  })
  .controller('PuzzlesController', function(puzzles) {
    const loadPuzzles = () => {
      puzzles.get()
      .then((data) => {
        this.puzzles = data;
      })
      .catch((err) => {
        throw err;
      });
    }

    loadPuzzles();

    this.click = function(id) {
      puzzles.delete(id)
      .then((data) => {
        loadPuzzles();
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    };
  })
  .controller('PuzzlesFormController', function(puzzles, $routeParams) {
    const { id } = $routeParams;

    if (id === 'new') {
      this.form = {
        nRows: 1,
        nCols: 1,
        imageUrl: ''
      }
    }
    else {
      puzzles.getOne(id)
      .then((data) => {
        console.log(data);
        this.form = {
          nRows: data.nRows,
          nCols: data.nCols,
          imageUrl: data.imageUrl
        }
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    }
  })
  ;
})();
