// electron main

'use strict';

const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

// const ipc = electron.ipcMain;

let mainWindow;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/../browser/editor.html`);

  mainWindow.webContents.openDevTools();

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
      label: 'View',
      submenu: [{
        label: 'Puzzle Editor',
        accelerator: 'Cmd+P',
        click: () => mainWindow.webContents.send('edit', 'puzzles')
      }, {
        label: 'User Editor',
        accelerator: 'Cmd+U',
        click: () => mainWindow.webContents.send('edit', 'users')
      }]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
