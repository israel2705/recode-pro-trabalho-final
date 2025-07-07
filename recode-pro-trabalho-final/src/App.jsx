import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import LandingPage from "./landing page/landing.page1";


function App() {
  return (
    <Router>
      <Navbar />

      <main className="content-wrapper">
      <Routes>
  <Route path="/" element={<LandingPage />} />
</Routes>

      </main>

      <Footer />
    </Router>
  );
}

export default App;
