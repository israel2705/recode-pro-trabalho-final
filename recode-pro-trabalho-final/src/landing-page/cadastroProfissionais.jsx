import Navbar from "../recode-pro-trabalho-final/src/navbar/components/Navbar";
import React, { useState } from "react";

const cadastroProfissionais = () => {
  const [formData, setFormData] = useState({
    nome: "",
    especialidade: "",
    endereco: "",
    atendimentoSUS: false,
    atendimentoParticular: false,
    contato: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Cadastro enviado com sucesso!");
  };

  return (
    <div>
      <div>
        <h1>Cadastre seu atendimento especializado em TEA</h1>
        <p>
          Profissionais da saúde que atendem pessoas no espectro autista podem
          divulgar seus serviços aqui.
          <br />
          As informações ficarão disponíveis para o público.
        </p>

        <form onSubmit={handleSubmit}>
          <h2>
            Preencha os dados para cadastrar seu atendimento especializado
          </h2>
          <label>
            Nome completo:*
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Especialidade:*
            <input
              type="text"
              name="especialidade"
              placeholder="Especialidade"
              value={formData.especialidade}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            :Endereço de atendimento*
            <input
              type="text"
              name="endereco"
              placeholder="Endereço de atendimento"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </label>
          <fieldset>
            <legend>Forma de atendimento:*</legend>
            <label></label>
            <label>
              <input
                type="checkbox"
                name="atendimentoSUS"
                checked={formData.atendimentoSUS}
                onChange={handleChange}
              />
              SUS
            </label>

            <label>
              <input
                type="checkbox"
                name="atendimentoParticular"
                checked={formData.atendimentoParticular}
                onChange={handleChange}
              />
              Particular
            </label>
          </fieldset>
          <label>
            Contato profissional (opcional)*
            <input
              type="text"
              name="contato"
              placeholder="Contato profissional (opcional)"
              value={formData.contato}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar Cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default cadastroProfissionais;
