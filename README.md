# ElecronJS Desktop App Demo
![image](https://github.com/user-attachments/assets/ccaaf1f4-50c9-4504-bfc0-b895aabbf3bb)

# About The Project

This is a simple Desktopg app build using Electron JS framework.

# Built With

<ul dir="auto">
<li><a href="https://www.electronjs.org/" rel="nofollow">Electron JS</a></li>
</ul>

# Getting Started

<h3>Create a Electron JS project</h3>

Initialize a new Node.js project.
```
npm init
```

Then install Electron as a development dependency.
```
npm install electron --save-dev
```

Then write your code. **main.js** is the Entry Point.

# Packaging

First install Electron Packager.
```
npm install electron-packager --save-dev
```

Then run the following command to package your app.
```
npx electron-packager . MyApp --platform=win32 --arch=x64 --out=dist/ --overwrite
```
Replace ***win32*** with ***darwin*** for *macOS* or ***linux*** for *Linux*, and ***x64*** with ***ia32*** if needed.

# Contact

Yasas Maddunage - yasasrm@gmail.com
Project Link: https://github.com/Yasasrm/Elecron-Desktop-App-Demo

