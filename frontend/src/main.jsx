// index.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/styles.css';
import './index.css';
import { keycloak, initKeycloak } from './auth';

function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initKeycloak()
      .then(() => {
        setAuthenticated(true);
        setLoading(false);
        console.log('✅ Authenticated');
        console.log('🔑 Token:', keycloak.token);
      })
      .catch(err => {
        console.error('❌ Keycloak init error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>🔐 Loading authentication...</p>;
  if (!authenticated) return <p>❌ Not authenticated</p>;

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
