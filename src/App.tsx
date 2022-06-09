import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import './App.css';
import CadastrarCategoria from './components/categoria/cadastrarCategoria/CadastrarCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/categoria" element={<ListaCategoria />} />
          <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
          <Route path="/atualizarCategoria/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;