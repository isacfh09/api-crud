const express = require('express');
const mongoose = require('mongoose');
const productosRutas = require('./rutas/productosRutas');
const authMiddleware = require('./middleware/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta pública sin autenticación
app.get('/', (req, res) => {
  res.send('API CRUD funcionando');
});


app.use('/api/productos', authMiddleware, productosRutas);


app.use((req, res, next) => {
  res.status(404).json({ message: ' La Ruta no fue encontrada' });
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(500).json({
    message: 'Ocurrió un error interno en el servidor',
    error: err.message,
  });
});


mongoose.connect('mongodb://localhost:27017/dbSistemaStock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
