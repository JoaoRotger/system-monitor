# 📌 System Monitor – VS Code Extension

This is a Visual Studio Code extension that displays, in real time, information about your computer’s performance directly in the **status bar** of VS Code.

It shows:

- ✅ Current CPU usage
- ✅ Memory (RAM) usage
- ✅ CPU temperature (when available)

---

## ✨ Features

- ✅ Automatically updates every 2 seconds
- ✅ Works on Windows, Linux, and macOS
- ✅ Starts together with VS Code and stays active until you close it
- ✅ Lightweight and no complex configuration required

---

## 🧪 How to run the tests

### Requirements for testing

- Node.js installed
- Development dependencies installed:

  npm install --save-dev mocha @types/mocha ts-node sinon @types/sinon

- It’s recommended to run `npm install` to ensure all project dependencies are installed.

### Running the tests

In the terminal, run:

  npm test

Or, if you prefer, run only the tests with:

  npm run test

The tests are located in the `tests/` folder and cover both the visual creation of the status bar item and the display of CPU, RAM, and temperature values (mocked).

---

## 🚀 How to run in development mode

1. Prerequisites:
   - Node.js installed
   - Visual Studio Code installed

2. Install dependencies:

   npm install

3. Compile TypeScript:

   npm run compile

4. Run in VS Code:
   - Press F5 in VS Code
   - A new window of VS Code will open with the extension loaded
   - Check the bottom right corner of the status bar

---

## 📦 How to package

To generate a .vsix file and install manually:

  npm install -g vsce
  vsce package

Then, in VS Code:

- Go to Extensions (Ctrl+Shift+X)
- Click on the ...
- Select Install from VSIX… and choose the generated file.

---

## 🛠 Technologies used

- Visual Studio Code API
- TypeScript
- systeminformation for hardware data reading

---

## 🖥️ Compatibility

- ✅ Windows
- ✅ Linux
- ✅ macOS

> Note: temperature may not be available on all hardware/systems.

---

## 📜 License

This project is licensed under the MIT License.
