const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar la conexión de la Base de Datos
const pool = require('./db'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta inicial de prueba
app.get('/', (req, res) => {
  res.send('¡El servidor de Zephiron está corriendo exitosamente!');
});

// Encender el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});