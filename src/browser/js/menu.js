const _Main = {
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
  }
};
const _View = {
  label: 'View',
  submenu: [{
    label: 'Puzzle Editor',
    click: () => mainWindow.webContents.send('edit', 'puzzles')
  }, {
    label: 'User Editor',
    click: () => mainWindow.webContents.send('edit', 'users')
  }]
};

// from https://github.com/DenisVuyka/electron-react/blob/master/core/app-menu/
const _Edit = {
  label: 'Edit',
  submenu: [
    {
      label: 'Undo',
      accelerator: 'Command+Z',
      selector: 'undo:'
    },
    {
      label: 'Redo',
      accelerator: 'Shift+Command+Z',
      selector: 'redo:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Cut',
      accelerator: 'Command+X',
      selector: 'cut:'
    },
    {
      label: 'Copy',
      accelerator: 'Command+C',
      selector: 'copy:'
    },
    {
      label: 'Paste',
      accelerator: 'Command+V',
      selector: 'paste:'
    },
    {
      label: 'Select All',
      accelerator: 'Command+A',
      selector: 'selectAll:'
    },
  ]
};

module.exports = [_Main, _Edit, _View];
