/* globals angular, require */
/* eslint-disable no-invalid-this */
(function() {
  'use strict';

  const electron = require('electron');
  const readImageDirectory =
    electron.remote.require('../server/readImageDirectory')

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
  .controller('PuzzlesFormController', function(puzzles, $routeParams, $timeout) {
    const { id } = $routeParams;

    this.form = {};
    readImageDirectory((files) => {
      this.form.imageUrls = files.map(file => `images/${file}`);
      $timeout(() => {
        $('select').material_select();
      }, 100);
    });

    if (id === 'new') {
      this.form.imageUrl = '';
      this.form.nRows = 1;
      this.form.nCols = 1;
      this.form.pieceContentSize = 100;
      this.form.hasRotatedPieces = false;
    }
    else {
      puzzles.getOne(id)
      .then((data) => {
        this.form.imageUrl = data.imageUrl;
        this.form.nRows = data.nRows;
        this.form.nCols = data.nCols;
        this.form.pieceContentSize = data.pieceContentSize;
        this.form.hasRotatedPieces = data.hasRotatedPieces;
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    }
  })
  ;
})();
