import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/styles.css';
import './index.css';
import keycloak from './utils/keycloak';

keycloak.init({
  onLoad: 'login-required',              // fuerza login
  checkLoginIframe: false,               // evita error de iframe
  redirectUri: 'http://localhost:5173/'  // redirige correctamente
}).then(authenticated => {
  if (authenticated) {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } else {
    keycloak.login(); // si no está autenticado, redirige a login
  }
}).catch(error => {
  console.error("Keycloak init failed", error);
});
