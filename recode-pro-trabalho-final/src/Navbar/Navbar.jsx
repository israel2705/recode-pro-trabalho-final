import logo from "../recode-pro-trabalho-final/src/img/logo.png";
function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <a href="#home">Home</a>
        <a href="#Busca de Profissionais">Busca de Profissionais</a>
        <a href="#Cadastro Profissionais">Cadastro Profissionais</a>
        <a href="#Compartilhamento de Informações">
          Compartilhamento de Informações
        </a>
        <a href="#Quem Somos">Quem Somos</a>
      </nav>
    </header>
  );
}

export default Navbar;
