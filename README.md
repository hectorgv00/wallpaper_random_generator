# Screensaver Generator

A simple Electron application to generate and download custom wallpapers.

## Features

- Generate wallpapers with different styles:
  - Gradient
  - Geometric Patterns
  - Procedural Noise
- Download the generated wallpaper as a PNG image.
- Responsive canvas that adjusts to the window size.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory in your terminal.
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode:

```sh
npm start
```

This command uses the `start` script defined in [`package.json`](package.json), which executes `electron .`.

### Building the Application

To build the application for distribution (e.g., creating an installer for Windows):

```sh
npm run dist
```

This command uses the [`dist`](dist) script defined in [`package.json`](package.json), which executes `electron-builder`. The build configuration is specified in the `build` section of [`package.json`](package.json). The output files will be located in the [`dist`](dist) directory.

## Usage

1.  Launch the application.
2.  Select the desired wallpaper type (Degradado, Patrones geométricos, Ruido) from the dropdown menu.
3.  Click the "Generar Fondo" button to generate a new wallpaper based on the selected type.
4.  Click the "Descargar" button to save the current wallpaper as `wallpaper.png`.

## Project Structure

- [`index.html`](index.html): Main HTML file for the renderer process.
- [`main.js`](main.js): Main Electron process script.
- [`renderer.js`](renderer.js): JavaScript for the renderer process (handles UI logic and canvas drawing).
- [`styles.css`](styles.css): CSS styles for the application.
- [`package.json`](package.json): Project metadata and dependencies.
- [`assets/icon.ico`](assets/icon.ico): Application icon used for the build.
