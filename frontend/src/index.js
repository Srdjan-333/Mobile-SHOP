import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './redux/store';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={Store}>
      <App />
    </Provider>
  );

  reportWebVitals();
}
