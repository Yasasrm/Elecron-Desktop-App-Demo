const { Menu } = require('electron');

// Define the custom menu template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click() {
          console.log('Open clicked');
        }
      },
      {
        label: 'Save',
        click() {
          console.log('Save clicked');
        }
      },
      { type: 'separator' },
      {
        label: 'Exit',
        role: 'quit',
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        role: 'reload',
      },
      {
        label: 'Toggle Developer Tools',
        role: 'toggleDevTools',
      }
    ]
  },
  {
    label: 'Custom Action',
    click() {
      console.log('Custom action triggered');
    }
  }
];

// Function to build and set the application menu
function setApplicationMenu() {
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

module.exports = { setApplicationMenu };
