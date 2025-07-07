// Navbar.jsx
import styles from './Navbar.module.css';
import logo from '../assets/logo2.png';


function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo TEAConecta" className={styles.logo} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#busca">Busca de Profissionais</a></li>
          <li><a href="#cadastro">Cadastro Profissionais</a></li>
          <li><a href="#compartilhamento">Compartilhar Informações</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;