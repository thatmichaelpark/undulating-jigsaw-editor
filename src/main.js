// electron main

'use strict';

const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  // mainWindow.loadURL('http://localhost:8000/');

  const name = app.getName();
  const template = [
    {
      label: name,
      submenu: [{
        label: `About ${name}`,
        role: 'about'
      }, {
        type: 'separator'
      }, {
        label: `Hide ${name}`,
        role: 'hide',
        accelerator: 'Cmd+H'
      }, {
        label: 'Hide Others',
        role: 'hideothers',
        accelerator: 'Alt+Cmd+H'
      }, {
        label: 'Show All',
        role: 'unhide'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        click: app.quit,
        accelerator: 'Cmd+Q'
      }]
    },
    {
      label: 'Editor',
      submenu: [{
        label: 'Puzzle Editor'
      }, {
        label: 'User Editor'
      }]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
