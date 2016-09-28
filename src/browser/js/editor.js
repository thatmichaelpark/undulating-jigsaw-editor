/* globals angular:false, require:false */
(function() {
  'use strict';
  const electron = require('electron');

  const ipc = electron.ipcRenderer;

  ipc.send('hello', 'there');

  ipc.on('hi', (event, args) => {
    console.log('on', args);
  });

  angular.module('blueitApp', []);
})();
