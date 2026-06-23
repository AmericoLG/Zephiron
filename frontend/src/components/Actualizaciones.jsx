import { useState, useEffect } from 'react';

function Actualizaciones() {
  const listaOriginal = [
    { id: 1, novela: "Tatoeba Last Dungeon (NL)", capitulo: "Volumen 14 Completo", imagen: "/portadas/Slayers.png" },
    { id: 2, novela: "Shadow Slave (NW)", capitulo: "Capítulos 351 - 355", imagen: "/portadas/shadowslave.png" },
    { id: 3, novela: "Overlord", capitulo: "Volumen 16 Capítulo 2", imagen: "/portadas/overlord.png" },
    { id: 4, novela: "Mushoku Tensei", capitulo: "Capítulo Especial", imagen: "/portadas/mushoku.png" },
    { id: 5, novela: "Solo Leveling", capitulo: "Extra 05", imagen: "/portadas/sololeveling.png" }
  ];

  // Para el deslice infinito clonamos solo los primeros elementos necesarios al final
  const itemsPorVista = 4;
  const actualizaciones = [...listaOriginal, ...listaOriginal.slice(0, itemsPorVista)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    // Si estamos al inicio, saltamos al final real sin animación primero
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(listaOriginal.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(listaOriginal.length - 1);
      }, 20);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Manejo del bucle infinito automático al terminar la animación hacia la derecha
  useEffect(() => {
    if (currentIndex === listaOriginal.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Apagamos la animación
        setCurrentIndex(0);        // Regresamos al inicio real de golpe
      }, 400); // Mismo tiempo que dura la transición CSS (0.4s)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, listaOriginal.length]);

  // Reactivamos la transición una vez que el componente se reubicó en el índice 0
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentIndex]);

  const styles = {
    container: { position: 'relative', margin: '20px auto', maxWidth: '1200px', padding: '0 50px' },
    sectionTitle: { 
      fontSize: '18px', 
      fontWeight: '800', 
      color: '#00f2fe', 
      textAlign: 'center',
      margin: '10px 0 25px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    carouselWindow: { overflow: 'hidden', width: '100%', borderRadius: '8px' },
    track: { 
      display: 'flex', 
      gap: '20px', 
      // Desplazamiento exacto basado en la cantidad de tarjetas que queremos mostrar (4 por fila)
      transform: `translateX(calc(-${currentIndex * (100 / itemsPorVista)}% - ${currentIndex * (20 / itemsPorVista)}px))`, 
      transition: isTransitioning ? 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      width: '100%'
    },
    cardAct: { 
      backgroundColor: '#0d0d0d', 
      borderRadius: '6px', 
      overflow: 'hidden', 
      border: '1px solid #1a1a1a',
      // Cada tarjeta ocupa exactamente un cuarto del espacio disponible del contenedor padre
      width: `calc((100% - ${(itemsPorVista - 1) * 20}px) / ${itemsPorVista})`,
      flexShrink: 0,
      boxSizing: 'border-box',
      textAlign: 'center',
      paddingBottom: '12px'
    },
    mainImage: {
      width: '100%',
      aspectRatio: '2/3',
      objectFit: 'cover'
    },
    infoAct: { padding: '10px 10px 0 10px' },
    title: { margin: '0 0 4px 0', fontSize: '14px', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: '700' },
    sub: { margin: 0, fontSize: '12px', color: '#00f2fe', fontWeight: '500' },
    
    btnArrow: (side) => ({
      position: 'absolute',
      top: '45%',
      transform: 'translateY(-50%)',
      [side]: '10px',
      backgroundColor: 'rgba(13, 13, 13, 0.85)',
      color: '#00f2fe',
      border: '1px solid #00f2fe',
      borderRadius: '50%',
      width: '38px',
      height: '38px',
      fontSize: '22px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      boxShadow: '0 0 10px rgba(0, 242, 254, 0.2)',
      transition: 'all 0.2s ease',
      userSelect: 'none'
    })
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.sectionTitle}>—— Últimas Actualizaciones ——</h3>
      
      {/* Flecha Izquierda */}
      <button 
        style={styles.btnArrow('left')} 
        onClick={prevSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#00f2fe';
          e.target.style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(13, 13, 13, 0.85)';
          e.target.style.color = '#00f2fe';
        }}
      >
        ‹
      </button>

      {/* Ventana contenedora */}
      <div style={styles.carouselWindow}>
        <div style={styles.track}>
          {actualizaciones.map((act, index) => (
            <div key={`${act.id}-${index}`} style={styles.cardAct}>
              <img 
                src={act.imagen} 
                alt={act.novela} 
                style={styles.mainImage} 
              />
              <div style={styles.infoAct}>
                <h4 style={styles.title}>{act.novela}</h4>
                <p style={styles.sub}>{act.capitulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flecha Derecha */}
      <button 
        style={styles.btnArrow('right')} 
        onClick={nextSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#00f2fe';
          e.target.style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(13, 13, 13, 0.85)';
          e.target.style.color = '#00f2fe';
        }}
      >
        ›
      </button>
    </div>
  );
}

export default Actualizaciones;