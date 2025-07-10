import React, { useState } from "react";
import styles from "./buscaProfissionais.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import fotoClara from "../assets/clara.png";
import fotoMarcelo from "../assets/marcelo.png";
import fotoPatricia from "../assets/patricia.png";

const BuscaProfissionais = () => {
  const [modalidade, setModalidade] = useState("");
  const [estadoUF, setEstadoUF] = useState("");

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const handleBuscar = () => {
    alert(`Buscando profissionais: ${modalidade} em ${estadoUF}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        Busque profissionais especializados em sua região
      </h1>

      <div className={styles.filtros}>
        <div className={styles.filtro}>
          <label><strong>Modalidade profissional</strong></label>
          <select value={modalidade} onChange={(e) => setModalidade(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Psicólogo">Psicólogo</option>
            <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
            <option value="Psiquiatra">Psiquiatra</option>
          </select>
        </div>

        <div className={styles.filtro}>
          <label><strong>Estado (UF)</strong></label>
          <select value={estadoUF} onChange={(e) => setEstadoUF(e.target.value)}>
            <option value="">Selecione um estado</option>
            {estados.map((uf) => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>
        </div>

        <button onClick={handleBuscar} className={styles.botao}>Buscar</button>
      </div>

      <div className={styles.cardContainer}>
        {/* Clara */}
        <div className={styles.card}>
          <img src={fotoClara} alt="Foto de Clara Ferreira" className={styles.fotoProfissional} />
          <div className={styles.cardInfo}>
            <h3>Clara Ferreira</h3>
            <p><strong>Especialidade:</strong> Psicóloga</p>
            <p><strong>Atendimento:</strong> SUS e Particular</p>
            <p><strong>Endereço:</strong> Rua Esperança, 215 – Centro, São Paulo - SP</p>
          </div>
          <div className={styles.mapIcon}>
            <FaMapMarkerAlt color="hotpink" />
          </div>
        </div>

        {/* Marcelo */}
        <div className={styles.card}>
          <img src={fotoMarcelo} alt="Foto de Marcelo Rocha" className={styles.fotoProfissional} />
          <div className={styles.cardInfo}>
            <h3>Marcelo Rocha</h3>
            <p><strong>Especialidade:</strong> Psiquiatra</p>
            <p><strong>Atendimento:</strong> Particular</p>
            <p><strong>Endereço:</strong> Av. Primavera, 872 – Jardim Florido, Campinas - SP</p>
          </div>
          <div className={styles.mapIcon}>
            <FaMapMarkerAlt color="hotpink" />
          </div>
        </div>

        {/* Patrícia */}
        <div className={styles.card}>
          <img src={fotoPatricia} alt="Foto de Patrícia Menezes" className={styles.fotoProfissional} />
          <div className={styles.cardInfo}>
            <h3>Patrícia Menezes</h3>
            <p><strong>Especialidade:</strong> Terapeuta Ocupacional</p>
            <p><strong>Atendimento:</strong> SUS</p>
            <p><strong>Endereço:</strong> Rua das Acácias, 32 – Vila Harmonia, Belo Horizonte - MG</p>
          </div>
          <div className={styles.mapIcon}>
            <FaMapMarkerAlt color="hotpink" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuscaProfissionais;
