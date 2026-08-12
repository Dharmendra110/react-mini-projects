# Tasks

A React + Vite application with Tailwind, Redux, and a collection of small UI projects and components.

## Overview

This repository is a development playground for UI components, interactive examples, and feature demos built with:

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router v8
- React Icons
- React Hooks utilities (ahooks)
- Debounced search utilities

## Key Features

### Demo Projects (`/src/projects/`)

- Counter app with Redux state management
- Debounced search implementation
- Infinite scroll component
- Pagination component
- Reviews/Ratings component
- RGB color mixer
- Star rating component
- Step progress bar
- Stopwatch timer
- Tabs component
- Theme switcher
- Todo app with Redux slice

### Features (`/src/features/`)

- **Authentication** (`auth/`): Login and Register components
- **E-Commerce** (`products/`): Product listing, Shopping cart with Redux state management
- **User Management** (`user/`): User listing and management
- **API Integration** (`fetchAPIs/`): REST API methods for CRUD operations on users

### Core Architecture

- Application routing under `/src/routes/AppRoutes.jsx`
- Redux store setup in `/src/app/store.js` with product and todo slices
- Theme context support in `/src/context/ThemeContext.jsx`
- Layout components (Header, Sidebar, MainContent) in `/src/components/Layout/`

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

```
src/
├── App.jsx                 - Main application entry component
├── main.jsx                - Vite client entry point
├── index.css               - Global styles
├── app/
│   └── store.js           - Redux store configuration with slices
├── components/
│   ├── PageNotFound.jsx    - 404 error page
│   └── Layout/
│       ├── Header.jsx      - Navigation header
│       ├── Sidebar.jsx     - Side navigation
│       └── MainContent.jsx - Main content wrapper
├── context/
│   └── ThemeContext.jsx    - Theme provider (light/dark mode)
├── data/
│   └── projects.js         - Static data/configuration
├── features/
│   ├── auth/               - Authentication (Login, Register)
│   ├── products/           - E-commerce (Products, Cart with Redux)
│   ├── user/               - User management
│   └── fetchAPIs/          - API methods (getUsers, addUsers, updateUsers, deleteUsers)
├── projects/               - Demo and example components
│   ├── counter app/        - Redux counter demo
│   ├── debounced serach/   - Debounce search utility
│   ├── infinite scroll/    - Infinite scroll implementation
│   ├── pagination/         - Pagination component
│   ├── reviews/            - Reviews listing
│   ├── rgb color mixer/    - Color picker utility
│   ├── star rating/        - Star rating component
│   ├── step progress bar/  - Progress bar visualization
│   ├── stopwatch/          - Timer/stopwatch app
│   ├── tabs component/     - Tab navigation
│   ├── theme switcher/     - Theme toggle demo
│   └── todo app/           - Redux todo app with todoSlice
└── routes/
    └── AppRoutes.jsx       - Route definitions and lazy loading
```

## Available Routes

- `/` - Home page
- `/users` - User management page
- `/products` - Product listing page
- `/cart` - Shopping cart page
- `/projects/counter` - Counter app demo
- `/projects/todo` - Todo app demo
- `/projects/debounce` - Debounced search demo
- `/projects/infinite` - Infinite scroll demo
- `/projects/pagination` - Pagination demo
- `/projects/reviews` - Reviews component
- `/projects/rgb` - RGB color mixer
- `/projects/progress-bar` - Step progress bar
- `/projects/stop-watch` - Stopwatch timer
- `/projects/theme` - Theme switcher demo
- `/projects/rating` - Star rating component
- `/projects/tabs` - Tabs component demo

## Notes

- This workspace is intended for experimentation and learning various React patterns.
- The repository includes completed examples, feature implementations, and interactive demos.
- Code splitting and lazy loading implemented via React.lazy() and Suspense for better performance.
- Redux used for global state management (products cart, todo items).
- Components support responsive design with Tailwind CSS.

## License

This project is currently unlicensed. Feel free to add a license file if needed.
