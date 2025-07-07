import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Corpo from "./landing-page/home.jsx"; // Você importou como 'Corpo'


function App() {
  return (
    <Router>
      <Navbar />

      <main className="content-wrapper">
        <Routes>
          {/* Mude 'LandingPage' para 'Corpo' aqui */}
          <Route path="/" element={<Corpo />} /> 
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;