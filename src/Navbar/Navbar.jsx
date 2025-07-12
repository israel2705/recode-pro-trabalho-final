import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo2.png'; // Caminho corrigido para a imagem da logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="TEA Profissionais Logo" className={styles.logoImage} />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link 
              to="/" 
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/buscar" 
              className={`${styles.navLink} ${isActive('/buscar') ? styles.active : ''}`}
            >
              Buscar Profissionais
            </Link>
            <Link 
              to="/cadastro" 
              className={`${styles.navLink} ${isActive('/cadastro') ? styles.active : ''}`}
            >
              Cadastrar-se
            </Link>
            <Link 
              to="/compartilhar" 
              className={`${styles.navLink} ${isActive('/compartilhar') ? styles.active : ''}`}
            >
              Compartilhar
            </Link>

            <Link 
              to="/contato" 
              className={`${styles.navLink} ${isActive('/contato') ? styles.active : ''}`}
            >
              Contato
            </Link>

          </div>

          {/* CTA Button */}
          <div className={styles.ctaSection}>
            <Link to="/cadastro" className={styles.ctaButton}>
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <Link 
            to="/" 
            className={`${styles.mobileNavLink} ${isActive('/') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/buscar" 
            className={`${styles.mobileNavLink} ${isActive('/buscar') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Buscar Profissionais
          </Link>
          <Link 
            to="/cadastro" 
            className={`${styles.mobileNavLink} ${isActive('/cadastro') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Cadastrar-se
          </Link>
          <Link 
            to="/compartilhar" 
            className={`${styles.mobileNavLink} ${isActive('/compartilhar') ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Compartilhar
          </Link>
          <Link 
            to="/cadastro" 
            className={styles.mobileCta}
            onClick={() => setIsMenuOpen(false)}
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


