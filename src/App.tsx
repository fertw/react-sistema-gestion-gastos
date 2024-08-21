import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Componente Home
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Bienvenido a la página principal.</p>
    </div>
  );
}

// Componente About
function Gastos() {
  return (
    <div>
      <h2>About</h2>
      <p>Esta es la página sobre nosotros.</p>
    </div>
  );
}



// Componente principal con ruteo
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Gastos</Link>
            </li>
          </ul>
        </nav>

        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gastos" element={<Gastos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
