-- 1. Tabla de Usuarios (Soporta rol de Mecenas/Premium)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'lector', -- 'lector', 'mecenas', 'admin'
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla de Categorías (Para el catálogo)
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL, -- 'Fantasía', 'Isekai', 'Acción', etc.
    descripcion TEXT
);

-- 3. Tabla de Novelas (Incluye sinopsis, portada y categoría)
CREATE TABLE novelas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    sinopsis TEXT,
    imagen_portada VARCHAR(255),
    estado VARCHAR(20) DEFAULT 'en_emision', -- 'en_emision', 'finalizado'
    categoria_id INT REFERENCES categorias(id) ON DELETE SET NULL,
    autor_id INT REFERENCES usuarios(id) ON DELETE SET NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. NUEVA TABLA: Volúmenes
-- Permite agrupar los capítulos de una novela (ej: "Volumen 1: El Despertar")
CREATE TABLE volumenes (
    id SERIAL PRIMARY KEY,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    numero_volumen INT NOT NULL,
    titulo VARCHAR(150),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_novela_volumen UNIQUE (novela_id, numero_volumen)
);

-- 5. Tabla de Capítulos (Modificada para bloqueo Premium/Mecenas)
CREATE TABLE capitulos (
    id SERIAL PRIMARY KEY,
    volumen_id INT REFERENCES volumenes(id) ON DELETE CASCADE,
    numero_capitulo INT NOT NULL, -- Orden del capítulo dentro del volumen o novela
    titulo VARCHAR(150) NOT NULL,
    contenido TEXT NOT NULL, -- El texto largo que leerá el usuario
    es_premium BOOLEAN DEFAULT FALSE, -- Si es TRUE, solo lo ven mecenas por ahora
    fecha_liberacion TIMESTAMP, -- La fecha exacta en que pasa a ser "todo público"
    fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_volumen_capitulo UNIQUE (volumen_id, numero_capitulo)
);

-- 6. Tabla de Historial (Opcional en el Frontend, pero guarda el progreso si hay Login)
CREATE TABLE historial_lectura (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    novela_id INT REFERENCES novelas(id) ON DELETE CASCADE,
    ultimo_capitulo_id INT REFERENCES capitulos(id) ON DELETE CASCADE,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_usuario_novela UNIQUE (usuario_id, novela_id)
);