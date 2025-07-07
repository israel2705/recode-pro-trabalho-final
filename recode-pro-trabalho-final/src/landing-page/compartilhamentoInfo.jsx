import React, { useState } from "react";

export default function compartilhamentoInfo() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    especialidade: "",
    atendimento: "sus",
    avaliacao: 0,
    comentario: "",
  });
  // criei uma função/const que faça a avaliação de 1 a 5 para as estrelas dadas pela avaliação do cliente,
  // futuramente essa parte do codigo precisa ser deletado!!!!!!!!!!!!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStarClick = (star) => {
    setFormData((prev) => ({
      ...prev,
      avaliacao: star,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro enviado! Obrigado pelo seu comentário.");

    setFormData({
      nome: "",
      endereco: "",
      especialidade: "",
      atendimento: "sus",
      avaliacao: 0,
      comentario: "",
    });
  };

  return (
    <div>
      <h1>
        Compartilhe informações sobre locais <br /> de atendimento para pessoas
        com TEA
      </h1>
      <p>
        Aqui você pode enviar informações de forma anônima sobre locais <br />
        que oferecem atendimento especializado. Seu relato pode ajudar muitas
        famílias!
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          Nome do local de atendimento:*
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Digite o nome do local"
          />
        </label>

        <label>
          Endereço:*
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
            placeholder="Digite o endereço"
          />
        </label>

        <label>
          Especialidade:*
          <input
            type="text"
            name="especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            required
            placeholder="Digite sua especialidade"
          />
        </label>

        <fieldset>
          <legend>Forma de atendimento:*</legend>
          <label>
            <input
              type="radio"
              name="atendimento"
              value="sus"
              checked={formData.atendimento === "sus"}
              onChange={handleChange}
              required
            />
            SUS
          </label>
          <label>
            <input
              type="radio"
              name="atendimento"
              value="particular"
              checked={formData.atendimento === "particular"}
              onChange={handleChange}
            />
            Particular
          </label>
        </fieldset>

        <div>
          <label>Avaliação do Local:</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                filled={star <= formData.avaliacao}
                onClick={() => handleStarClick(star)}
              />
            ))}
          </div>
        </div>

        <label>
          Comentário (opcional):
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            placeholder="Deixe seu comentário aqui"
          />
        </label>

        <button type="submit">Enviar informação</button>
      </form>
    </div>
  );
}
// Essa função criada precisa ser deletada futuramente por ser muito complexa, ela precisa ser componentizada,
//  pois talvez ela não funcione nesse codigo de forma integrada
function Star({ filled, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: filled ? "#f5b301" : "#ccc",
        fontSize: 28,
        marginRight: 5,
        userSelect: "none",
      }}
      aria-label={`${filled ? "Estrela preenchida" : "Estrela vazia"}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      ★
    </span>
  );
}

// Essa função criada precisa ser deletada futuramente por ser muito complexa,
// ela precisa ser componentizada, pois talvez ela não funcione nesse codigo de forma integrada
