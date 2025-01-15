import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Add custom styles here if needed
import Portfolio from './portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
