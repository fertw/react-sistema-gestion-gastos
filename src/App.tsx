import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Gastos from './components/Gastos';
import Home from './components/Home';




// Componente principal con ruteo
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gastos" element={<Gastos />} />
      </Routes>
    </Router>
  );
}

export default App;
