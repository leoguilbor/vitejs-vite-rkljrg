import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function insertIntoTarget(element: any, options: any) {
  var parent = options || document.head;
  console.log('teste');
  parent.appendChild(element);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
