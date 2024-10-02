const { app, BrowserWindow } = require('electron');

// Function to create the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable node integration
      contextIsolation: false, // Disable context isolation (for Electron versions > 12)
    },
  });

  // Load the HTML file into the window
  win.loadFile('index.html');
}

// This event is triggered when Electron finishes initializing
app.whenReady().then(createWindow);

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
