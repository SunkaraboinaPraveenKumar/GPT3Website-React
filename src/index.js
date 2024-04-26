import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root
root.render(<App />);
