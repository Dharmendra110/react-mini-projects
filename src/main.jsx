import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import store from "./app/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <Provider store={store}>
      <App />
      </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
