import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class createCustomElement extends HTMLElement {
  connectedCallback() {
    const el = document.createElement('link');
    el.href = '/src/index.css';
    el.rel = 'stylesheet';
    const mountPoint = document.createElement('span');

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(mountPoint);
    shadow.appendChild(el);
    const root = ReactDOM.createRoot(mountPoint);

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

//const el = document.createElement('style');
//insertIntoTarget(el);

customElements.define('create-ce', createCustomElement);
