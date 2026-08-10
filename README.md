# Tasks

A React + Vite application with Tailwind, Redux, and a collection of small UI projects and components.

## Overview

This repository is a development playground for UI components, interactive examples, and feature demos built with:

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- React Icons
- Debounced search utilities

## Key Features

- `/src/projects/` contains multiple demo apps, including:
  - Counter app
  - Debounced search
  - Infinite scroll
  - Pagination
  - Reviews component
  - RGB color mixer
  - Star rating
  - Step progress bar
  - Stopwatch
  - Tabs component
  - Theme switcher
  - Todo app
- Shopping cart feature in `/src/projects/shopping cart/`
- Application routing under `/src/routes/AppRoutes.jsx`
- Theme context support in `/src/context/ThemeContext.jsx`
- Redux store setup in `/src/app/store.js`

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint project

```bash
npm run lint
```

## Project Structure

- `src/`
  - `App.jsx` - main application entry component
  - `main.jsx` - Vite client entry point
  - `index.css` - global styles
  - `app/` - Redux store configuration
  - `components/` - shared UI components
  - `context/` - React context providers
  - `data/` - static data sources
  - `projects/` - example app pages and demos
  - `routes/` - application routing files

## Notes

- This workspace is intended for experimentation and learning.
- The repository includes a mix of completed examples and work-in-progress demos.

## License

This project is currently unlicensed. Feel free to add a license file if needed.
