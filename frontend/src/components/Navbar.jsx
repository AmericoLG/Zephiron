function Navbar() {
  const styles = {
    header: {
      backgroundColor: '#0d0d0d',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #00f2fe',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    logo: {
      margin: 0,
      fontSize: '22px',
      color: '#ffffff',
      letterSpacing: '3px',
      fontWeight: '900',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    link: {
      color: '#a3a3a3',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    searchContainer: {
      flexGrow: 0.4,
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      width: '100%',
      backgroundColor: '#1a1a1a',
      border: '1px solid #333',
      borderRadius: '20px',
      padding: '8px 16px',
      color: '#fff',
      fontSize: '13px',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    // Contenedor para alinear el Avatar y el Botón de Ingresar
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    // Icono de Usuario minimalista hecho con puro CSS
    userAvatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: '1px solid #a3a3a3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.2s'
    },
    // Silueta de cabeza del avatar
    avatarHead: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#a3a3a3',
      position: 'absolute',
      top: '5px',
      transition: 'background-color 0.2s'
    },
    // Silueta de hombros del avatar
    avatarBody: {
      width: '18px',
      height: '10px',
      borderRadius: '10px 10px 0 0',
      backgroundColor: '#a3a3a3',
      position: 'absolute',
      bottom: '2px',
      transition: 'background-color 0.2s'
    },
    loginBtn: {
      backgroundColor: 'transparent',
      color: '#00f2fe',
      border: '1px solid #00f2fe',
      padding: '8px 18px',
      borderRadius: '4px',
      fontSize: '13px',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  return (
    <header style={styles.header}>
      {/* LADO IZQUIERDO: LOGO Y NAVEGACIÓN */}
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>ZEPHIRON</h1>
        <nav>
          <ul style={styles.navLinks}>
            <li>
              <span 
                style={{ ...styles.link, color: '#00f2fe' }}
                onMouseEnter={(e) => e.target.style.color = '#00f2fe'}
                onMouseLeave={(e) => e.target.style.color = '#00f2fe'}
              >
                Inicio
              </span>
            </li>
            <li>
              <span 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.color = '#00f2fe'}
                onMouseLeave={(e) => e.target.style.color = '#a3a3a3'}
              >
                Catálogo
              </span>
            </li>
          </ul>
        </nav>
      </div>

      {/* CENTRO: BUSCADOR INTEGRADO */}
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Buscar novela por título..." 
          style={styles.searchInput}
          onFocus={(e) => e.target.style.borderColor = '#00f2fe'}
          onBlur={(e) => e.target.style.borderColor = '#333'}
        />
      </div>

      {/* LADO DERECHO: AVATAR DE USUARIO E INGRESO */}
      <div style={styles.rightContainer}>
        {/* Icono de usuario interactivo */}
        <div 
          style={styles.userAvatar}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#00f2fe';
            e.currentTarget.children[0].style.backgroundColor = '#00f2fe';
            e.currentTarget.children[1].style.backgroundColor = '#00f2fe';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#a3a3a3';
            e.currentTarget.children[0].style.backgroundColor = '#a3a3a3';
            e.currentTarget.children[1].style.backgroundColor = '#a3a3a3';
          }}
        >
          <div style={styles.avatarHead} />
          <div style={styles.avatarBody} />
        </div>

        <button 
          style={styles.loginBtn}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 242, 254, 0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Ingresar
        </button>
      </div>
    </header>
  );
}

export default Navbar;