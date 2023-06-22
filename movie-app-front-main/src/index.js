import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './views/Root';
import { ThemeProvider } from "styled-components";
import { theme } from './assets/styles/theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from './hooks/MyContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* Dodajemy MyContextProvider jako rodzica */}
      <MyContextProvider>
        <Root />
      </MyContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
