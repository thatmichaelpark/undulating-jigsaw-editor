// electron main

'use strict';

const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;
const ipc = electron.ipcMain;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/../browser/editor.html`);

  mainWindow.webContents.openDevTools();;;

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
        click: () => mainWindow.webContents.send('edit puzzle')
      }, {
        label: 'User Editor',
        click: () => mainWindow.webContents.send('edit user')
      }]
    }
  ];

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipc.on('hello', (event, args) => {
  console.log(args);
  mainWindow.webContents.send('hi', 'ho');
});
