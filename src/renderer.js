// Handle Context Menu (Right-click) content
const { ipcRenderer } = require('electron');

// Listen for right-click (contextmenu event) and trigger IPC message
window.addEventListener('contextmenu', (e) => {
  e.preventDefault();  // Prevent the default context menu from showing
  ipcRenderer.send('show-context-menu');  // Send a message to the main process
});

// Optionally, listen for a response from the main process
ipcRenderer.on('context-menu-action', (event, message) => {
  if (message === 'custom-action') {
    console.log('Custom action performed in the main process');
    alert('Custom action was clicked!');
  }
});
