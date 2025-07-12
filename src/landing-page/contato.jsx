import React, { useState } from "react";
import "./contato.css"; 

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      } else {
        alert("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      alert("Erro na conexão com o servidor.");
    }
  };

  return (
    <div className="contato-container">
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="contato-form">
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Assunto:
          <input type="text" name="assunto" value={formData.assunto} onChange={handleChange} required />
        </label>

        <label>
          Mensagem:
          <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
