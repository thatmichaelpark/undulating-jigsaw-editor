/* globals angular, require, Materialize, $ */
/* eslint-disable no-invalid-this */
(function() {
  'use strict';

  const electron = require('electron');
  const readImageDirectory =
    electron.remote.require('../server/readImageDirectory');

  angular.module('editorApp')
  .controller('EditorController', ($scope, $location) => {
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
    };

    loadUsers();

    this.click = function(id) {
      users.delete(id)
      .then(() => {
        loadUsers();
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    };
  })
  .controller('UsersFormController', function(
    users, $routeParams, $location
  ) {
    const { id } = $routeParams;
    this.form = {};

    users.getOne(id)
    .then((data) => {
      this.form.id = data.id;
      this.form.username = data.username;
    })
    .catch((err) => {
      Materialize.toast(err.data, 4000);
    })

    this.submit = () => {
      users.patch(this.form.id, this.form)
      .then(() => {
        $location.path('users');
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    }
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
    };

    loadPuzzles();

    this.click = function(id) {
      puzzles.delete(id)
      .then(() => {
        loadPuzzles();
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    };
  })

   // eslint-disable-next-line max-params
  .controller('PuzzlesFormController', function(
    puzzles, $routeParams, $timeout, $location
  ) {
    const puzzleId = $routeParams.id;

    this.form = {};
    readImageDirectory((err, files) => {
      if (err) {
        return Materialize.toast(err, 4000);
      }
      this.form.imageUrls = files.map((file) => `/images/${file}`);
      $timeout(() => {
        $('select').material_select();
      }, 0);
    });

    if (puzzleId === 'new') {
      (() => {  // initialize new puzzle
        this.form.imageUrl = '';
        this.form.nRows = 1;
        this.form.nCols = 1;
        this.form.pieceContentSize = 100;
        this.form.hasRotatedPieces = false;
        this.form.nWaves = 0;
        this.form.maxWaveDepth = 0;
        this.form.maxFreq = 0;
        this.form.maxV = 0;
        this.form.backgroundColor = '#ffffff';
      })();
    }
    else {
      puzzles.getOne(puzzleId)
      .then((data) => {
        this.form.id = data.id;
        this.form.imageUrl = data.imageUrl;
        this.form.nRows = data.nRows;
        this.form.nCols = data.nCols;
        this.form.pieceContentSize = data.pieceContentSize;
        this.form.hasRotatedPieces = data.hasRotatedPieces;
        this.form.nWaves = data.nWaves;
        this.form.maxWaveDepth = data.maxWaveDepth;
        this.form.maxFreq = data.maxFreq;
        this.form.maxV = data.maxV;
        this.form.backgroundColor = data.backgroundColor;
      })
      .catch((err) => {
        Materialize.toast(err.data, 4000);
      });
    }

    this.submit = () => {
      delete this.form.imageUrls;
      const { id } = this.form;

      if (id) {
        puzzles.patch(id, this.form)
        .then(() => {
          $location.path('puzzles');
        })
        .catch((err) => {
          Materialize.toast(err.data, 4000);
        });
      }
      else {
        puzzles.post(this.form)
        .then(() => {
          $location.path('puzzles');
        })
        .catch((err) => {
          Materialize.toast(err.data, 4000);
        });
      }
    };
  })
  ;
})();
