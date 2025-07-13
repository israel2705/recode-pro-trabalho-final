const API_BASE_URL = 'http://localhost:8080/api';

export const profissionaisService = {
  listarTodos: () => apiRequest('/profissionais'),
  buscarPorId: (id) => apiRequest(`/profissionais/${id}`),
  cadastrar: (profissional) => apiRequest('/profissionais', {
    method: 'POST',
    body: JSON.stringify(profissional),
  }),
  buscar: (filtros = {}) => {
    // Implementação de busca com filtros
  }
};

export const contatosService = {
  enviar: (contato) => apiRequest('/contatos', {
    method: 'POST',
    body: JSON.stringify(contato),
  })
};