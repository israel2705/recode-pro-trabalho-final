import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Corpo from "./landing-page/home.jsx";
import BuscaProfissionais from "./landing-page/buscaProfissionais.jsx";
import CadastroProfissionais from "./landing-page/cadastroProfissionais.jsx";
import CompartilhamentoInfo from "./landing-page/compartilhamentoInfo.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Corpo />} />
          <Route path="/buscar" element={<BuscaProfissionais />} />
          <Route path="/cadastro" element={<CadastroProfissionais />} />
          <Route path="/compartilhar" element={<CompartilhamentoInfo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
