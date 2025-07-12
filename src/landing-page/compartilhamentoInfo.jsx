import { useState } from 'react';
import styles from './compartilhamentoInfo.module.css';

const CompartilhamentoInfo = () => {
  const [activeTab, setActiveTab] = useState('recursos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const recursos = [
    {
      id: 1,
      titulo: 'Guia Completo sobre TEA',
      categoria: 'Guias',
      descricao: 'Um guia abrangente sobre o Transtorno do Espectro Autista, incluindo características, diagnóstico e intervenções.',
      autor: 'Dr. Ana Silva',
      dataPublicacao: '2024-01-15',
      tipo: 'PDF',
      link: '#',
      tags: ['TEA', 'Diagnóstico', 'Intervenção']
    },
    {
      id: 2,
      titulo: 'Estratégias de Comunicação para Crianças com TEA',
      categoria: 'Artigos',
      descricao: 'Técnicas práticas para melhorar a comunicação com crianças no espectro autista.',
      autor: 'Dra. Maria Costa',
      dataPublicacao: '2024-01-10',
      tipo: 'Artigo',
      link: '#',
      tags: ['Comunicação', 'Estratégias', 'Crianças']
    },
    {
      id: 3,
      titulo: 'Webinar: Inclusão Escolar no TEA',
      categoria: 'Vídeos',
      descricao: 'Apresentação sobre práticas de inclusão escolar para estudantes com TEA.',
      autor: 'Prof. João Santos',
      dataPublicacao: '2024-01-05',
      tipo: 'Vídeo',
      link: '#',
      tags: ['Inclusão', 'Escola', 'Educação']
    },
    {
      id: 4,
      titulo: 'Checklist de Desenvolvimento Infantil',
      categoria: 'Ferramentas',
      descricao: 'Lista de verificação para acompanhar marcos do desenvolvimento em crianças.',
      autor: 'Equipe TEA Profissionais',
      dataPublicacao: '2024-01-01',
      tipo: 'Checklist',
      link: '#',
      tags: ['Desenvolvimento', 'Avaliação', 'Marcos']
    },
    {
      id: 5,
      titulo: 'Terapia ABA: Princípios e Práticas',
      categoria: 'Guias',
      descricao: 'Introdução aos princípios da Análise do Comportamento Aplicada (ABA) no tratamento do TEA.',
      autor: 'Dr. Carlos Mendes',
      dataPublicacao: '2023-12-20',
      tipo: 'PDF',
      link: '#',
      tags: ['ABA', 'Terapia', 'Comportamento']
    },
    {
      id: 6,
      titulo: 'Atividades Sensoriais para TEA',
      categoria: 'Atividades',
      descricao: 'Coleção de atividades sensoriais para estimular o desenvolvimento de crianças com TEA.',
      autor: 'Dra. Fernanda Lima',
      dataPublicacao: '2023-12-15',
      tipo: 'Guia Prático',
      link: '#',
      tags: ['Sensorial', 'Atividades', 'Desenvolvimento']
    }
  ];

  const eventos = [
    {
      id: 1,
      titulo: 'Congresso Nacional de TEA 2024',
      data: '2024-03-15',
      horario: '08:00 - 18:00',
      local: 'São Paulo, SP',
      tipo: 'Presencial',
      descricao: 'Evento anual reunindo especialistas, famílias e profissionais para discussão sobre avanços no tratamento do TEA.',
      organizador: 'Associação Brasileira de TEA',
      inscricoes: 'Abertas',
      valor: 'R$ 150,00'
    },
    {
      id: 2,
      titulo: 'Workshop: Intervenção Precoce no TEA',
      data: '2024-02-20',
      horario: '14:00 - 17:00',
      local: 'Online',
      tipo: 'Online',
      descricao: 'Workshop prático sobre técnicas de intervenção precoce para crianças com TEA.',
      organizador: 'Instituto de Desenvolvimento Infantil',
      inscricoes: 'Abertas',
      valor: 'Gratuito'
    },
    {
      id: 3,
      titulo: 'Seminário: Família e TEA',
      data: '2024-02-10',
      horario: '09:00 - 12:00',
      local: 'Rio de Janeiro, RJ',
      tipo: 'Presencial',
      descricao: 'Seminário focado no apoio às famílias de pessoas com TEA.',
      organizador: 'Centro de Apoio Familiar',
      inscricoes: 'Encerradas',
      valor: 'R$ 80,00'
    }
  ];

  const comunidades = [
    {
      id: 1,
      nome: 'Pais e Mães de Crianças com TEA',
      membros: 1250,
      descricao: 'Grupo de apoio para famílias compartilharem experiências e dicas.',
      categoria: 'Famílias',
      plataforma: 'WhatsApp',
      moderador: 'Ana Silva'
    },
    {
      id: 2,
      nome: 'Profissionais TEA Brasil',
      membros: 890,
      descricao: 'Rede de profissionais especializados em TEA para troca de conhecimentos.',
      categoria: 'Profissionais',
      plataforma: 'Telegram',
      moderador: 'Dr. João Santos'
    },
    {
      id: 3,
      nome: 'TEA e Inclusão Escolar',
      membros: 650,
      descricao: 'Discussões sobre práticas de inclusão escolar para estudantes com TEA.',
      categoria: 'Educação',
      plataforma: 'Facebook',
      moderador: 'Prof. Maria Costa'
    }
  ];

  const filteredRecursos = recursos.filter(recurso => {
    const matchesSearch = recurso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recurso.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recurso.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || recurso.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const ResourceCard = ({ recurso }) => (
    <div className={styles.resourceCard}>
      <div className={styles.resourceHeader}>
        <div className={styles.resourceType}>{recurso.tipo}</div>
        <div className={styles.resourceCategory}>{recurso.categoria}</div>
      </div>
      <h3 className={styles.resourceTitle}>{recurso.titulo}</h3>
      <p className={styles.resourceDescription}>{recurso.descricao}</p>
      <div className={styles.resourceMeta}>
        <span className={styles.resourceAuthor}>Por: {recurso.autor}</span>
        <span className={styles.resourceDate}>
          {new Date(recurso.dataPublicacao).toLocaleDateString('pt-BR')}
        </span>
      </div>
      <div className={styles.resourceTags}>
        {recurso.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.resourceActions}>
        <button className={styles.downloadButton}>
          📥 Baixar
        </button>
        <button className={styles.shareButton}>
          🔗 Compartilhar
        </button>
      </div>
    </div>
  );

  const EventCard = ({ evento }) => (
    <div className={styles.eventCard}>
      <div className={styles.eventHeader}>
        <div className={styles.eventDate}>
          {new Date(evento.data).toLocaleDateString('pt-BR')}
        </div>
        <div className={`${styles.eventType} ${styles[evento.tipo.toLowerCase()]}`}>
          {evento.tipo}
        </div>
      </div>
      <h3 className={styles.eventTitle}>{evento.titulo}</h3>
      <p className={styles.eventDescription}>{evento.descricao}</p>
      <div className={styles.eventDetails}>
        <div className={styles.eventDetail}>
          <span className={styles.detailIcon}>🕒</span>
          <span>{evento.horario}</span>
        </div>
        <div className={styles.eventDetail}>
          <span className={styles.detailIcon}>📍</span>
          <span>{evento.local}</span>
        </div>
        <div className={styles.eventDetail}>
          <span className={styles.detailIcon}>👥</span>
          <span>{evento.organizador}</span>
        </div>
        <div className={styles.eventDetail}>
          <span className={styles.detailIcon}>💰</span>
          <span>{evento.valor}</span>
        </div>
      </div>
      <div className={styles.eventActions}>
        <button 
          className={`${styles.registerButton} ${evento.inscricoes === 'Encerradas' ? styles.disabled : ''}`}
          disabled={evento.inscricoes === 'Encerradas'}
        >
          {evento.inscricoes === 'Abertas' ? 'Inscrever-se' : 'Inscrições Encerradas'}
        </button>
        <button className={styles.moreInfoButton}>
          Mais Informações
        </button>
      </div>
    </div>
  );

  const CommunityCard = ({ comunidade }) => (
    <div className={styles.communityCard}>
      <div className={styles.communityHeader}>
        <h3 className={styles.communityName}>{comunidade.nome}</h3>
        <div className={styles.communityPlatform}>{comunidade.plataforma}</div>
      </div>
      <p className={styles.communityDescription}>{comunidade.descricao}</p>
      <div className={styles.communityMeta}>
        <div className={styles.communityMembers}>
          <span className={styles.membersIcon}>👥</span>
          <span>{comunidade.membros} membros</span>
        </div>
        <div className={styles.communityCategory}>{comunidade.categoria}</div>
      </div>
      <div className={styles.communityModerator}>
        Moderado por: {comunidade.moderador}
      </div>
      <button className={styles.joinButton}>
        Participar
      </button>
    </div>
  );

  return (
    <div className={styles.compartilhamentoPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Centro de Recursos e Comunidade</h1>
          <p>Compartilhe conhecimento e conecte-se com a comunidade TEA</p>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabNavigation}>
          <button
            className={`${styles.tabButton} ${activeTab === 'recursos' ? styles.active : ''}`}
            onClick={() => setActiveTab('recursos')}
          >
            📚 Recursos
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'eventos' ? styles.active : ''}`}
            onClick={() => setActiveTab('eventos')}
          >
            📅 Eventos
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'comunidades' ? styles.active : ''}`}
            onClick={() => setActiveTab('comunidades')}
          >
            👥 Comunidades
          </button>
        </div>

        {/* Resources Tab */}
        {activeTab === 'recursos' && (
          <div className={styles.tabContent}>
            <div className={styles.searchAndFilter}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Buscar recursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.categoryFilter}
              >
                <option value="">Todas as categorias</option>
                <option value="Guias">Guias</option>
                <option value="Artigos">Artigos</option>
                <option value="Vídeos">Vídeos</option>
                <option value="Ferramentas">Ferramentas</option>
                <option value="Atividades">Atividades</option>
              </select>
            </div>

            <div className={styles.resourcesGrid}>
              {filteredRecursos.map(recurso => (
                <ResourceCard key={recurso.id} recurso={recurso} />
              ))}
            </div>

            {filteredRecursos.length === 0 && (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>📚</div>
                <h3>Nenhum recurso encontrado</h3>
                <p>Tente ajustar os termos de busca ou filtros</p>
              </div>
            )}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'eventos' && (
          <div className={styles.tabContent}>
            <div className={styles.eventsGrid}>
              {eventos.map(evento => (
                <EventCard key={evento.id} evento={evento} />
              ))}
            </div>
          </div>
        )}

        {/* Communities Tab */}
        {activeTab === 'comunidades' && (
          <div className={styles.tabContent}>
            <div className={styles.communitiesGrid}>
              {comunidades.map(comunidade => (
                <CommunityCard key={comunidade.id} comunidade={comunidade} />
              ))}
            </div>
          </div>
        )}

        {/* Contribution Section */}
        <div className={styles.contributionSection}>
          <div className={styles.contributionCard}>
            <h2>Contribua com a Comunidade</h2>
            <p>Compartilhe seus conhecimentos e recursos com outros profissionais e famílias</p>
            <div className={styles.contributionActions}>
              <button className={styles.contributeButton}>
                📝 Enviar Recurso
              </button>
              <button className={styles.contributeButton}>
                📅 Divulgar Evento
              </button>
              <button className={styles.contributeButton}>
                👥 Criar Comunidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompartilhamentoInfo;

