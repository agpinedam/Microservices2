const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const cors = require('cors');

// Rutas existentes
const authRouter = require('./routes/oauth');
const requestRouter = require('./routes/request');
const htmlAuthRouter = require('./routes/htmlAuth');
const htmlFileRouter = require('./routes/htmlResponse');

const app = express();

// CORS para frontend React
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configurar sesión para Keycloak
const memoryStore = new session.MemoryStore();
app.use(session({
  secret: 'una_clave_segura',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

// Instanciar Keycloak
const keycloak = new Keycloak({ store: memoryStore });
app.use(keycloak.middleware());

// Middleware opcional para usar keycloak en otras rutas
app.use((req, res, next) => {
  req.keycloak = keycloak;
  next();
});

// Configuraciones base
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/oauth', authRouter);
app.use('/request', requestRouter);
app.use('/htmlAuth', htmlAuthRouter);
app.use('/htmlResponse', htmlFileRouter);

// ➕ Ruta protegida de ejemplo
app.get('/protected', keycloak.protect(), (req, res) => {
  res.json({ message: 'Acceso autorizado. Usuario autenticado con Keycloak.' });
});

// Errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
