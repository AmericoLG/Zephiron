const express = require('express');
const router = express.Router();

// Datos de prueba simulando la estructura de la base de datos
const novelasSimuladas = [
  {
    id: 1,
    titulo: "El Despertar del Mecenas",
    sinopsis: "Una historia épica sobre un guerrero que descubre un poder antiguo oculto en los registros de un gremio comercial.",
    imagen_portada: "https://via.placeholder.com/150x220",
    estado: "en_emision",
    categoria: "Fantasía"
  },
  {
    id: 2,
    titulo: "Crónicas de Zephiron",
    sinopsis: "El destino del mundo cambia cuando las deidades eligen a un nuevo portador para la espada mística Zephiron.",
    imagen_portada: "https://via.placeholder.com/150x220",
    estado: "en_emision",
    categoria: "Isekai"
  }
];

// Ruta para obtener el catálogo completo (Para la página principal)
router.get('/', (req, res) => {
  res.json(novelasSimuladas);
});

module.exports = router;