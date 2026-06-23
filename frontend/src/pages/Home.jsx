import { useState } from 'react';
import Actualizaciones from '../components/Actualizaciones';

function Home() {
  const [novelas] = useState([
    {
      id: 1,
      titulo: "Overlord",
      imagen_portada: "/portadas/overlord.png",
      categoria: "Fantasía Oscura / Isekai"
    },
    {
      id: 2,
      titulo: "Shadow Slave",
      imagen_portada: "/portadas/shadowslave.png",
      categoria: "Fantasía / Acción"
    },
    {
      id: 3,
      titulo: "Mushoku Tensei",
      imagen_portada: "/portadas/mushoku.png",
      categoria: "Isekai / Fantasía"
    },
    {
      id: 4,
      titulo: "Solo Leveling",
      imagen_portada: "/portadas/sololeveling.png",
      categoria: "Acción / Fantasía"
    },
    {
      id: 5,
      titulo: "The Beginning After The End",
      imagen_portada: "/portadas/TheBeginning AfterTheEnd.png",
      categoria: "Fantasía / Reencarnación"
    },
    {
      id: 6,
      titulo: "Re:Zero",
      imagen_portada: "/portadas/ReZero.png",
      categoria: "Isekai / Suspenso"
    },
    {
      id: 7,
      titulo: "That Time I Got Reincarnated as a Slime",
      imagen_portada: "/portadas/ThatTimeIGotReincarnatedSlime.png",
      categoria: "Isekai / Fantasía"
    },
    {
      id: 8,
      titulo: "The Eminence in Shadow",
      imagen_portada: "/portadas/The Eminence in Shadow.png",
      categoria: "Acción / Comedia"
    },
    {
      id: 9,
      titulo: "Omniscient Reader's Viewpoint",
      imagen_portada: "/portadas/Omniscient Reader's Viewpoint.png",
      categoria: "Acción / Fantasía Urbano"
    },
    {
      id: 10,
      titulo: "Slayers",
      imagen_portada: "/portadas/Slayers.png",
      categoria: "Fantasía / Comedia"
    }
  ]);

  const styles = {
    // Configuración para asegurar que el pie de página quede abajo sin problemas
    wrapper: {
      backgroundColor: '#050505',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    container: { 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '30px 20px', 
      flex: 1 // Empuja el contenido restante hacia abajo
    },
    sectionTitle: { 
      fontSize: '20px', 
      fontWeight: '800', 
      color: '#00f2fe', 
      textAlign: 'center',
      margin: '40px 0 20px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    gridCatalogo: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
      gap: '25px',
      justifyItems: 'center'
    },
    cardNovela: { 
      backgroundColor: '#0d0d0d', 
      borderRadius: '6px', 
      overflow: 'hidden', 
      border: '1px solid #1a1a1a', 
      textAlign: 'center', 
      paddingBottom: '12px',
      maxWidth: '220px',
      width: '100%'
    },
    // Estilos del Pie de Página (Footer)
    footer: {
      backgroundColor: '#0d0d0d',
      borderTop: '1px solid #1a1a1a',
      padding: '20px 0',
      textAlign: 'center',
      marginTop: '60px'
    },
    footerText: {
      margin: 0,
      fontSize: '13px',
      color: '#666666',
      letterSpacing: '0.5px'
    },
    footerBrand: {
      color: '#00f2fe',
      fontWeight: '700'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Panel de actualizaciones aislado */}
        <Actualizaciones />

        {/* Catálogo */}
        <h3 style={styles.sectionTitle}>—— Catálogo Completo ——</h3>
        <div style={styles.gridCatalogo}>
          {novelas.map((novela) => (
            <div key={novela.id} style={styles.cardNovela}>
              <img 
                src={novela.imagen_portada} 
                alt={novela.titulo} 
                style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover' }} 
              />
              <h5 style={{ margin: '10px 10px 2px 10px', fontSize: '14px', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {novela.titulo}
              </h5>
              <span style={{ fontSize: '11px', color: '#666' }}>{novela.categoria}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de página colocado al final absoluto de la app */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} <span style={styles.footerBrand}>Novelas App</span>. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;