import React, { useState } from "react";
import styles from "./cadastroProfissionais.module.css";

const CadastroProfissionais = () => {
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
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          Cadastre seu atendimento especializado em TEA
        </h1>
        <p className={styles.descricao}>
          Profissionais da saúde que atendem pessoas no espectro autista podem
          divulgar seus serviços aqui. <br />
          As informações ficarão disponíveis para o público.
        </p>

        <form onSubmit={handleSubmit} className={styles.formulario}>
          <h2 className={styles.subtitulo}>
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
            Endereço de atendimento:*
            <input
              type="text"
              name="endereco"
              placeholder="Endereço de atendimento"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </label>

          <fieldset className={styles.fieldset}>
            <legend>Forma de atendimento:*</legend>

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
            Contato profissional (opcional):*
            <input
              type="text"
              name="contato"
              placeholder="Contato profissional (opcional)"
              value={formData.contato}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className={styles.botao}>
            Enviar Cadastro
          </button>
        </form>
      </div>

      <img
        src="/cadastrar.png"
        alt="Ilustração decorativa de cadastro"
        className={styles.imageDecorativa}
      />
    </main>
  );
};

export default CadastroProfissionais;
