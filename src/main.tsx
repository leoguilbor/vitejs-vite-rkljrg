import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function insertIntoTarget(element: Node) {
  var parent = document.head;
  console.log('teste');
  parent.appendChild(element);
}
class createCustomElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    const shadowRoot: ShadowRoot = mountPoint.attachShadow({ mode: 'open' });

    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

const el = document.createElement('style');
insertIntoTarget(el);

customElements.define('createCustomElement', createCustomElement);
/*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
);*/
