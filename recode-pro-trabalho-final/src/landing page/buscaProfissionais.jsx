import Navbar from "../recode-pro-trabalho-final/src/navbar/components/Navbar";
import React, { useState } from "react";

const buscaProfissionais = () => {
  const [modalidade, setModalidade] = useState("");
  const [estadoUF, setEstadoUF] = useState("");

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  const handleBuscar = () => {
    alert(`Buscando profissionais: ${modalidade} em ${estadoUF}`);
  };

  return (
    <div>
      <h1>
        <strong>Busque profissionais especializados em sua região</strong>
      </h1>

      <div>
        {/* <p>Modalidade profissional</p> */}
        <label>Modalidade profissional</label>
        <select
          value={modalidade}
          onChange={(e) => setModalidade(e.target.value)}
        >
          <option value="">Psicologo</option>
          <option value="">outro exemplo</option>
        </select>
      </div>

      <div>
        {/* <p>Estado(UF)</p> */}
        <label>Estado (UF)</label>
        <select value={estadoUF} onChange={(e) => setEstadoUF(e.target.value)}>
          <option value="">Selecione um estado</option>
          {estados.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleBuscar}>Buscar Profissional</button>
      {/* Cards dos profissionais olhar o css!!!*/}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Clara Ferreira</h3>
          <p>
            <strong>Especialidade:</strong> Psicóloga
          </p>
          <p>
            <strong>Atendimento:</strong> SUS e Particular
          </p>
          <p>
            <strong>Endereço:</strong> Rua Esperança, 215 – Centro, São Paulo -
            SP
          </p>
        </div>

        <div className={styles.card}>
          <h3>Marcelo Rocha</h3>
          <p>
            <strong>Especialidade:</strong> Psiquiatra
          </p>
          <p>
            <strong>Atendimento:</strong> Particular
          </p>
          <p>
            <strong>Endereço:</strong> Av. Primavera, 872 – Jardim Florido,
            Campinas - SP
          </p>
        </div>
        <div className={styles.card}>
          <h3>Patrícia Menezes</h3>
          <p>
            <strong>Especialidade:</strong> Terapeuta Ocupacional
          </p>
          <p>
            <strong>Atendimento:</strong> SUS
          </p>
          <p>
            <strong>Endereço:</strong> Rua das Acácias, 32 – Vila Harmonia, Belo
            Horizonte - MG
          </p>
        </div>
      </div>
    </div>
  );
};

export default buscaProfissionais;
