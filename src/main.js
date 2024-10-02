const { app, BrowserWindow, ipcMain } = require('electron');
const { setApplicationMenu } = require('./menu');       // Import the menu logic
const { showContextMenu } = require('./contextMenu');   // Import the right-click menu logic

// Function to create the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('src\\index.html');
}

// Set up the app when ready
app.whenReady().then(() => {
  createWindow(); // Create the window
  setApplicationMenu(); // Set the application menu

  // Handle the context menu when a right-click event is triggered in the renderer
  ipcMain.on('show-context-menu', (event) => {
    showContextMenu(event);  // Show the custom context menu
  });
});

// Close the app when all windows are closed (except for macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate a window on macOS when clicking on the app icon after all windows are closed
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
