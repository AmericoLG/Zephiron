const { Pool } = require('pg');
require('dotenv').config();

// Configuración de la conexión usando las variables del archivo .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Probar la conexión al iniciar
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ Error al conectarse a PostgreSQL:', err.stack);
  }
  console.log('✨ ¡Conexión exitosa a la base de datos PostgreSQL!');
  release();
});

module.exports = pool;