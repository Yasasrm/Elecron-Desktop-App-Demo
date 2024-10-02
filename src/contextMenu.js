const { Menu, BrowserWindow } = require('electron');

// Define the custom context menu template
const contextMenuTemplate = (event) => [
  {
    label: 'Inspect Element',
    role: 'inspect',
  },
  {
    label: 'Custom Action',
    click: () => {
      console.log('Custom Action Clicked!');
      event.sender.send('context-menu-action', 'custom-action');
    }
  }
];

// Function to show the context menu
function showContextMenu(event) {
  const menu = Menu.buildFromTemplate(contextMenuTemplate(event));
  menu.popup(BrowserWindow.fromWebContents(event.sender));
}

module.exports = { showContextMenu };
