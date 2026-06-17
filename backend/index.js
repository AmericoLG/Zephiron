const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración para permitir conectar con el Frontend
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