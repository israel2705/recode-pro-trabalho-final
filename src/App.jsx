import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from "./landing-page/home.jsx";
import BuscaProfissionais from "./landing-page/buscaProfissionais.jsx";
import CadastroProfissionais from "./landing-page/cadastroProfissionais.jsx";
import CompartilhamentoInfo from "./landing-page/compartilhamentoInfo.jsx";
import Contato from "./landing-page/Contato";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buscar" element={<BuscaProfissionais />} />
            <Route path="/cadastro" element={<CadastroProfissionais />} />
            <Route path="/compartilhar" element={<CompartilhamentoInfo />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

