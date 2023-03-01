import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CounterContextProvider } from './context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);
