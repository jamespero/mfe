import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Mount 
const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  );
}

// Dev & Isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Container
export { mount };