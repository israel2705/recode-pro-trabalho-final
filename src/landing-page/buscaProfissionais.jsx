import { useState, useEffect } from 'react';
import styles from './buscaProfissionais.module.css';

const BuscaProfissionais = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    especialidade: '',
    cidade: '',
    tipoAtendimento: '',
    valorMax: '',
    disponibilidade: ''
  });
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Mock data - em um projeto real, viria de uma API
  const mockProfessionals = [
    {
      id: 1,
      nome: 'Dra. Ana Silva',
      profissao: 'Psicóloga',
      especialidades: ['Psicologia Clínica', 'Análise do Comportamento Aplicada (ABA)'],
      cidade: 'São Paulo',
      estado: 'SP',
      tipoAtendimento: ['Presencial', 'Online'],
      valorConsulta: 150,
      experiencia: '8 anos',
      avaliacao: 4.8,
      totalAvaliacoes: 45,
      disponibilidade: ['Segunda-feira', 'Terça-feira', 'Quarta-feira'],
      descricao: 'Especialista em TEA com abordagem ABA. Atendimento personalizado para crianças e adolescentes.',
      foto: '/src/assets/clara.png',
      verificado: true
    },
    {
      id: 2,
      nome: 'Dr. Carlos Santos',
      profissao: 'Terapeuta Ocupacional',
      especialidades: ['Terapia Ocupacional', 'Integração Sensorial'],
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      tipoAtendimento: ['Presencial', 'Domiciliar'],
      valorConsulta: 120,
      experiencia: '12 anos',
      avaliacao: 4.9,
      totalAvaliacoes: 67,
      disponibilidade: ['Terça-feira', 'Quinta-feira', 'Sexta-feira'],
      descricao: 'Terapeuta ocupacional com especialização em integração sensorial e desenvolvimento infantil.',
      foto: '/src/assets/marcelo.png',
      verificado: true
    },
    {
      id: 3,
      nome: 'Dra. Maria Costa',
      profissao: 'Fonoaudióloga',
      especialidades: ['Fonoaudiologia', 'Comunicação Alternativa'],
      cidade: 'Belo Horizonte',
      estado: 'MG',
      tipoAtendimento: ['Presencial', 'Online'],
      valorConsulta: 100,
      experiencia: '6 anos',
      avaliacao: 4.7,
      totalAvaliacoes: 32,
      disponibilidade: ['Segunda-feira', 'Quarta-feira', 'Sexta-feira'],
      descricao: 'Fonoaudióloga especializada em comunicação alternativa e desenvolvimento da linguagem.',
      foto: '/src/assets/patricia.png',
      verificado: true
    },
    {
      id: 4,
      nome: 'Dr. João Oliveira',
      profissao: 'Psicólogo',
      especialidades: ['Neuropsicologia', 'Avaliação Neuropsicológica'],
      cidade: 'Porto Alegre',
      estado: 'RS',
      tipoAtendimento: ['Presencial'],
      valorConsulta: 180,
      experiencia: '15 anos',
      avaliacao: 4.9,
      totalAvaliacoes: 89,
      disponibilidade: ['Segunda-feira', 'Terça-feira', 'Quinta-feira'],
      descricao: 'Neuropsicólogo com vasta experiência em avaliação e intervenção em TEA.',
      foto: '/src/assets/marcelo.png',
      verificado: true
    },
    {
      id: 5,
      nome: 'Dra. Fernanda Lima',
      profissao: 'Psicopedagoga',
      especialidades: ['Psicopedagogia', 'Educação Especial'],
      cidade: 'Curitiba',
      estado: 'PR',
      tipoAtendimento: ['Presencial', 'Online', 'Domiciliar'],
      valorConsulta: 90,
      experiencia: '4 anos',
      avaliacao: 4.6,
      totalAvaliacoes: 28,
      disponibilidade: ['Terça-feira', 'Quarta-feira', 'Sábado'],
      descricao: 'Psicopedagoga especializada em educação especial e inclusão escolar.',
      foto: '/src/assets/clara.png',
      verificado: false
    },
    {
      id: 6,
      nome: 'Dr. Roberto Mendes',
      profissao: 'Fisioterapeuta',
      especialidades: ['Fisioterapia', 'Psicomotricidade'],
      cidade: 'Salvador',
      estado: 'BA',
      tipoAtendimento: ['Presencial', 'Domiciliar'],
      valorConsulta: 110,
      experiencia: '10 anos',
      avaliacao: 4.8,
      totalAvaliacoes: 54,
      disponibilidade: ['Segunda-feira', 'Quarta-feira', 'Sexta-feira'],
      descricao: 'Fisioterapeuta com especialização em psicomotricidade e desenvolvimento motor.',
      foto: '/src/assets/marcelo.png',
      verificado: true
    }
  ];

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setProfessionals(mockProfessionals);
      setFilteredProfessionals(mockProfessionals);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterProfessionals();
  }, [searchTerm, filters, professionals]);

  const filterProfessionals = () => {
    let filtered = professionals.filter(prof => {
      const matchesSearch = prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           prof.especialidades.some(esp => esp.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           prof.profissao.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesEspecialidade = !filters.especialidade || 
                                   prof.especialidades.some(esp => esp.includes(filters.especialidade));

      const matchesCidade = !filters.cidade || prof.cidade.toLowerCase().includes(filters.cidade.toLowerCase());

      const matchesTipoAtendimento = !filters.tipoAtendimento || 
                                    prof.tipoAtendimento.includes(filters.tipoAtendimento);

      const matchesValor = !filters.valorMax || prof.valorConsulta <= parseInt(filters.valorMax);

      const matchesDisponibilidade = !filters.disponibilidade || 
                                     prof.disponibilidade.includes(filters.disponibilidade);

      return matchesSearch && matchesEspecialidade && matchesCidade && 
             matchesTipoAtendimento && matchesValor && matchesDisponibilidade;
    });

    setFilteredProfessionals(filtered);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      especialidade: '',
      cidade: '',
      tipoAtendimento: '',
      valorMax: '',
      disponibilidade: ''
    });
    setSearchTerm('');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={styles.star}>★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.starHalf}>★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>★</span>);
    }

    return stars;
  };

  const ProfessionalCard = ({ professional }) => (
    <div className={styles.professionalCard}>
      <div className={styles.cardHeader}>
        <div className={styles.professionalPhoto}>
          <img src={professional.foto} alt={professional.nome} />
          {professional.verificado && (
            <div className={styles.verifiedBadge} title="Profissional Verificado">
              ✓
            </div>
          )}
        </div>
        <div className={styles.professionalInfo}>
          <h3 className={styles.professionalName}>{professional.nome}</h3>
          <p className={styles.professionalTitle}>{professional.profissao}</p>
          <div className={styles.rating}>
            {renderStars(professional.avaliacao)}
            <span className={styles.ratingText}>
              {professional.avaliacao} ({professional.totalAvaliacoes} avaliações)
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.specialties}>
          {professional.especialidades.map((esp, index) => (
            <span key={index} className={styles.specialtyTag}>{esp}</span>
          ))}
        </div>

        <p className={styles.description}>{professional.descricao}</p>

        <div className={styles.professionalDetails}>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>📍</span>
            <span>{professional.cidade}, {professional.estado}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>💰</span>
            <span>R$ {professional.valorConsulta}/consulta</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailIcon}>⏰</span>
            <span>{professional.experiencia} de experiência</span>
          </div>
        </div>

        <div className={styles.attendanceTypes}>
          {professional.tipoAtendimento.map((tipo, index) => (
            <span key={index} className={styles.attendanceTag}>{tipo}</span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <button className={styles.contactButton}>
          Entrar em Contato
        </button>
        <button className={styles.favoriteButton} title="Adicionar aos favoritos">
          ♡
        </button>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando profissionais...</p>
      </div>
    );
  }

  return (
    <div className={styles.buscaPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Encontre Profissionais Especializados</h1>
          <p>Conecte-se com especialistas em TEA na sua região</p>
        </div>

        {/* Search and Filters */}
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Buscar por nome, especialidade ou profissão..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              🔍
            </button>
          </div>

          <div className={styles.filters}>
            <select
              value={filters.especialidade}
              onChange={(e) => handleFilterChange('especialidade', e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">Todas as especialidades</option>
              <option value="Psicologia Clínica">Psicologia Clínica</option>
              <option value="Terapia Ocupacional">Terapia Ocupacional</option>
              <option value="Fonoaudiologia">Fonoaudiologia</option>
              <option value="Neuropsicologia">Neuropsicologia</option>
              <option value="Psicopedagogia">Psicopedagogia</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="ABA">Análise do Comportamento (ABA)</option>
            </select>

            <input
              type="text"
              placeholder="Cidade"
              value={filters.cidade}
              onChange={(e) => handleFilterChange('cidade', e.target.value)}
              className={styles.filterInput}
            />

            <select
              value={filters.tipoAtendimento}
              onChange={(e) => handleFilterChange('tipoAtendimento', e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">Tipo de atendimento</option>
              <option value="Presencial">Presencial</option>
              <option value="Online">Online</option>
              <option value="Domiciliar">Domiciliar</option>
              <option value="Institucional">Institucional</option>
            </select>

            <input
              type="number"
              placeholder="Valor máximo"
              value={filters.valorMax}
              onChange={(e) => handleFilterChange('valorMax', e.target.value)}
              className={styles.filterInput}
            />

            <select
              value={filters.disponibilidade}
              onChange={(e) => handleFilterChange('disponibilidade', e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">Disponibilidade</option>
              <option value="Segunda-feira">Segunda-feira</option>
              <option value="Terça-feira">Terça-feira</option>
              <option value="Quarta-feira">Quarta-feira</option>
              <option value="Quinta-feira">Quinta-feira</option>
              <option value="Sexta-feira">Sexta-feira</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>

            <button onClick={clearFilters} className={styles.clearFilters}>
              Limpar Filtros
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className={styles.resultsHeader}>
          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>
              {filteredProfessionals.length} profissionais encontrados
            </span>
          </div>
          <div className={styles.viewControls}>
            <button
              className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
              title="Visualização em grade"
            >
              ⊞
            </button>
            <button
              className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
              title="Visualização em lista"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Results */}
        <div className={`${styles.results} ${styles[viewMode]}`}>
          {filteredProfessionals.length > 0 ? (
            filteredProfessionals.map(professional => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>Nenhum profissional encontrado</h3>
              <p>Tente ajustar os filtros ou termos de busca</p>
              <button onClick={clearFilters} className={styles.clearFiltersButton}>
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuscaProfissionais;

