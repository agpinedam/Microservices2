// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const flightRoutes = require('./routes/flightRoutes');
const googleRoutes = require('./routes/userGoogleInfo');

app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes);
app.use('/auth/google', googleRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
