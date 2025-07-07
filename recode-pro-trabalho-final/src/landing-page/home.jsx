// src/landing page/home.jsx

import Navbar from "../Navbar/Navbar"; // Verifique se o caminho do Navbar está correto
import styles from "./landing.page.module.css";
import imagem1 from "../assets/imagem1.png";
import imagem2 from "../assets/imagem2.png";

function Corpo () {
    return (
        <>
            <section className={styles.section1}>
                <div className={styles.section1Content}>
                    <h1>Encontre profissionais especializados em TEA com facilidade</h1>
                    <p>Conectar quem precisa a quem pode ajudar. Nossa plataforma conecta famílias e pacientes a profissionais qualificados no atendimento ao Transtorno do Espectro Autista (TEA), promovendo acesso, confiança e acolhimento.</p>
                    <button className={styles.buttonPrimary}>Buscar Profissionais</button>
                </div>
                <img src={imagem1} alt="Profissional e criança" className={styles.image1} />
            </section>

            <section className={styles.section2}>
                <img src={imagem2} alt="Família feliz" className={styles.image2} />
                <div className={styles.section2Content}>
                    <p>Encontrar profissionais especializados no atendimento ao Transtorno do Espectro Autista (TEA) é um desafio enfrentado por milhares de famílias brasileiras. Falta de informação organizada, indicações confiáveis e acessibilidade tornam esse processo ainda mais difícil.
                    Nossa proposta é disponibilizar uma plataforma colaborativa, onde cidadãos e profissionais possam contribuir com dados relevantes e atualizados. Por meio de filtros de pesquisa simples e objetivos, como especialidade, cidade e tipo de atendimento (SUS, particular ou ambos), o usuário poderá encontrar os profissionais mais adequados para cada necessidade.
                    Queremos facilitar o acesso, promover inclusão e oferecer uma rede segura e acolhedora de apoio.</p>
                </div>
            </section>

            <section className={styles.section3}>
                <h2>Construa essa rede com a gente</h2>
                <p>Nosso site é colaborativo: aqui, qualquer pessoa pode contribuir para facilitar o acesso a profissionais especializados no atendimento ao TEA.
                Se você é pai, mãe, responsável ou profissional da saúde, junte-se a essa causa e compartilhe informações que podem ajudar muitas famílias.</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.buttonPrimary}>Cadastrar Profissional</button>
                    <button className={styles.buttonSecondary}>Compartilhar Local</button>
                </div>
            </section>
        </>
    );
}

export default Corpo;