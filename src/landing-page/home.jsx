import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.page.module.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de criança com TEA",
      content: "Encontrei profissionais incríveis através da plataforma. O atendimento especializado fez toda a diferença no desenvolvimento do meu filho.",
      avatar: "/src/assets/clara.png"
    },
    {
      name: "Dr. João Santos",
      role: "Psicólogo Especialista",
      content: "A plataforma me conectou com famílias que realmente precisavam de ajuda. É gratificante poder contribuir para o desenvolvimento de crianças com TEA.",
      avatar: "/src/assets/marcelo.png"
    },
    {
      name: "Ana Costa",
      role: "Terapeuta Ocupacional",
      content: "Interface intuitiva e processo de cadastro simples. Consegui expandir meu atendimento e ajudar mais famílias através desta plataforma.",
      avatar: "/src/assets/patricia.png"
    }
  ];

  const features = [
    {
      icon: "🔍",
      title: "Busca Inteligente",
      description: "Encontre profissionais especializados por localização, especialidade e disponibilidade."
    },
    {
      icon: "👥",
      title: "Rede de Especialistas",
      description: "Conecte-se com psicólogos, terapeutas, fonoaudiólogos e outros profissionais qualificados."
    },
    {
      icon: "📱",
      title: "Fácil de Usar",
      description: "Interface intuitiva e processo simplificado para encontrar o cuidado que você precisa."
    },
    {
      icon: "🛡️",
      title: "Profissionais Verificados",
      description: "Todos os profissionais passam por processo de verificação de credenciais e qualificações."
    },
    {
      icon: "💬",
      title: "Comunicação Direta",
      description: "Entre em contato diretamente com profissionais através da plataforma."
    },
    {
      icon: "📊",
      title: "Acompanhamento",
      description: "Monitore o progresso e mantenha histórico de atendimentos e consultas."
    }
  ];

  const stats = [
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Conectando <span className={styles.highlight}>Famílias</span> a 
                <span className={styles.highlight}> Profissionais Especializados</span> em TEA
              </h1>
              <p className={styles.heroDescription}>
                Encontre os melhores profissionais especializados em Transtorno do Espectro Autista 
                na sua região. Facilitamos o acesso a cuidados especializados e promovemos inclusão.
              </p>
              <div className={styles.heroActions}>
                <Link to="/buscar" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                  Buscar Profissionais
                </Link>
                
              </div>
              <div className={styles.heroStats}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <img 
                  src="/src/assets/imagem1.png" 
                  alt="Profissionais especializados em TEA" 
                  className={styles.heroImg}
                />
                <div className={styles.floatingCard}>
                  <div className={styles.cardIcon}>✨</div>
                  <div className={styles.cardContent}>
                    <h4>Atendimento Especializado</h4>
                    <p>Profissionais qualificados e experientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Por que escolher nossa plataforma?</h2>
            <p className={styles.sectionDescription}>
              Oferecemos uma solução completa para conectar famílias a profissionais especializados
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Como funciona</h2>
            <p className={styles.sectionDescription}>
              Processo simples e direto para encontrar o profissional ideal
            </p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Busque Profissionais</h3>
                <p>Use nossos filtros para encontrar especialistas na sua região</p>
              </div>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Compare Perfis</h3>
                <p>Analise qualificações, especialidades e avaliações</p>
              </div>
            </div>
            <div className={styles.stepConnector}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Entre em Contato</h3>
                <p>Conecte-se diretamente com o profissional escolhido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>O que nossos usuários dizem</h2>
            <p className={styles.sectionDescription}>
              Histórias reais de famílias e profissionais que usam nossa plataforma
            </p>
          </div>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <p>"{testimonials[currentTestimonial].content}"</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className={styles.authorAvatar}
                />
                <div className={styles.authorInfo}>
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
            <p className={styles.ctaDescription}>
              Junte-se a centenas de famílias e profissionais que já fazem parte da nossa comunidade
            </p>
            <div className={styles.ctaActions}>
              <Link to="/buscar" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
                Encontrar Profissionais
              </Link>
              <Link to="/cadastro" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
                Cadastrar-se como Profissional
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;