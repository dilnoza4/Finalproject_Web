import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your custom CSS file for global styles
import App from './App'; // Main App component

// Render the root component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Optional: Measure performance (can be removed if not needed)
