# TEA Profissionais - Plataforma Completa

## 📋 Sobre o Projeto

O **TEA Profissionais** é uma plataforma moderna e funcional que conecta famílias a profissionais especializados em Transtorno do Espectro Autista (TEA). O projeto foi desenvolvido com design minimalista em tons de azul, seguindo as especificações solicitadas.

## ✨ Funcionalidades Implementadas

### 🏠 Página Inicial (Home)
- Hero section com call-to-action
- Estatísticas da plataforma
- Seção de recursos e benefícios
- Como funciona (processo em 3 etapas)
- Depoimentos de usuários com carrossel automático
- Design responsivo e animações suaves

### 🔍 Busca de Profissionais
- Sistema de busca por nome, especialidade ou profissão
- Filtros avançados:
  - Especialidade
  - Cidade
  - Tipo de atendimento
  - Valor máximo
  - Disponibilidade
- Cards de profissionais com:
  - Foto e informações básicas
  - Sistema de avaliações (estrelas)
  - Especialidades e tags
  - Detalhes de contato e valores
  - Botões de ação (contato e favoritos)
- Visualização em grade ou lista
- Dados mock de 6 profissionais

### 📝 Cadastro de Profissionais
- Formulário multi-etapas (4 etapas):
  1. **Dados Pessoais**: Nome, email, telefone, CPF, data de nascimento
  2. **Dados Profissionais**: Profissão, especialidades, registro, experiência, formação
  3. **Endereço e Atendimento**: Localização, tipos de atendimento, disponibilidade, valores
  4. **Documentos**: Upload de currículo, certificados e foto
- Indicador de progresso visual
- Validação de campos obrigatórios
- Simulação de envio com feedback

### 📚 Centro de Recursos e Comunidade
- **Aba Recursos**:
  - Busca e filtros por categoria
  - Cards com guias, artigos, vídeos, ferramentas
  - Botões de download e compartilhamento
- **Aba Eventos**:
  - Lista de eventos presenciais e online
  - Informações detalhadas (data, local, valor)
  - Botões de inscrição
- **Aba Comunidades**:
  - Grupos por plataforma (WhatsApp, Telegram, Facebook)
  - Informações de membros e moderadores
  - Botões para participar
- Seção de contribuição da comunidade

## 🎨 Design e Estilo

### Paleta de Cores
- **Azul Principal**: #3b82f6
- **Azul Escuro**: #1e40af
- **Azul Claro**: #dbeafe
- **Azul Extra Claro**: #eff6ff
- **Cinzas**: Variações de #f9fafb a #111827

### Características Visuais
- Design minimalista e limpo
- Tipografia moderna e legível
- Ícones e elementos visuais consistentes
- Animações suaves e transições
- Layout responsivo para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Framework principal
- **React Router DOM** - Navegação entre páginas
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Modules** - Estilização modular
- **CSS Custom Properties** - Variáveis CSS para consistência

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação**:
   - Abra o navegador em `http://localhost:5173`

4. **Build para produção**:
   ```bash
   npm run build
   ```

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade, funcionando perfeitamente em:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

## 🧭 Navegação

### Estrutura de Páginas
- `/` - Página inicial
- `/buscar` - Busca de profissionais
- `/cadastro` - Cadastro de profissionais
- `/compartilhar` - Centro de recursos e comunidade

### Componentes Principais
- **Navbar** - Navegação principal com menu responsivo
- **Footer** - Rodapé com links e informações
- **Cards** - Componentes reutilizáveis para profissionais, recursos, etc.

## 🎯 Funcionalidades Interativas

### Formulários
- Validação em tempo real
- Feedback visual de erros e sucessos
- Campos obrigatórios marcados
- Upload de arquivos simulado

### Filtros e Busca
- Busca em tempo real
- Filtros combinados
- Limpeza de filtros
- Contagem de resultados

### Interface
- Carrossel automático de depoimentos
- Abas interativas
- Botões com estados hover e focus
- Animações de entrada de elementos

## 📊 Dados Mock

O projeto inclui dados simulados para demonstração:
- 6 profissionais com informações completas
- 6 recursos educacionais
- 3 eventos
- 3 comunidades

## 🔧 Estrutura de Arquivos

```
src/
├── App.jsx                 # Componente principal
├── App.css                 # Estilos globais do app
├── index.css              # Estilos globais e variáveis CSS
├── main.jsx               # Ponto de entrada
├── Navbar/                # Componente de navegação
│   ├── Navbar.jsx
│   └── Navbar.module.css
├── Footer/                # Componente de rodapé
│   ├── Footer.jsx
│   └── Footer.module.css
└── landing-page/          # Páginas da aplicação
    ├── home.jsx
    ├── buscaProfissionais.jsx
    ├── cadastroProfissionais.jsx
    ├── compartilhamentoInfo.jsx
    ├── landing.page.module.css
    ├── buscaProfissionais.module.css
    ├── cadastroProfissionais.module.css
    └── compartilhamentoInfo.module.css
```

## 🎨 Customização

### Variáveis CSS
Todas as cores, espaçamentos e outros valores estão definidos como variáveis CSS em `src/index.css`, facilitando customizações futuras.

### Componentes Modulares
Cada componente possui seus próprios estilos em arquivos `.module.css`, evitando conflitos e facilitando manutenção.

## 📈 Próximos Passos (Sugestões)

Para expandir o projeto, considere implementar:
- Integração com APIs reais
- Sistema de autenticação
- Chat em tempo real
- Sistema de pagamentos
- Notificações push
- Dashboard administrativo
- Sistema de avaliações real
- Geolocalização

## 🤝 Contribuição

O projeto está estruturado para facilitar contribuições futuras, com código limpo, comentado e bem organizado.

---

**Desenvolvido com ❤️ para conectar famílias e profissionais especializados em TEA**

