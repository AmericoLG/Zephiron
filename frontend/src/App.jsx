import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0a0a0a';
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#e5e5e5', fontFamily: 'system-ui, sans-serif' }}>
      {/* Componente dedicado del encabezado global */}
      <Navbar />
      
      {/* Contenido principal */}
      <Home />
    </div>
  );
}

export default App;