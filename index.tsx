import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

// Note: index.css is implied by the tailwind script in HTML but for structure we keep standard imports
// In this specific setup, styles are injected via the HTML head.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);