import Navbar from "../recode-pro-trabalho-final/src/navbar/components/Navbar";
import imagem1 from"../recode-pro-trabalho-final/src/img/imagem1.png";
import imagem2 from"../recode-pro-trabalho-final/src/img/imagem2.png";

function Corpo () {
    return (
        <section>
            <h1>Encontre profissionais especializados em TEA com facilidade</h1><br />
            <p>Conectar quem precisa a quem pode ajudar.Nossa plataforma conecta famílias e pacientesa profissionais qualificados no atendimento ao Trasntorno do Espectro Autista (TEA), promovendo acesso, confiança e acolhimento.</p>
          <img src={imagem1} alt="" />
            </section>

        <button>Buscar Profissionais</button>

        <section>
            <img src={imagem2} alt="" />
            <p>Encontrar profissionais especializados no atendimento ao Transtorno do Espectro Autista (TEA) é um desafio enfrentado por milhares de famílias brasileiras. Falta de informação organizada, indicações confiáveis e acessibilidade tornam esse processo ainda mais difícil.
                Nossa proposta é disponibilizar uma plataforma colaborativa, onde cidadãos e profissionais possam contribuir com dados relevantes e atualizados. Por meio de filtros de pesquisa simples e objetivos, como especialidade, cidade e tipo de atendimento (SUS, particular ou ambos), o usuário poderá encontrar os profissionais mais adequados para cada necessidade.
                Queremos facilitar o acesso, promover inclusão e oferecer uma rede segura e acolhedora de apoio.</p>
        </section>

        <section>
            <div>
                <h2>Construa essa rede com a gente </h2>
                <p>Nosso site é colaborativo: aqui, qualquer pessoa pode contribuir para facilitar o acesso a profissionais especializados no atendimento ao TEA.  
                    Se você é pai, mãe, responsável ou profissional da saúde, junte-se a essa causa e compartilhe informações que podem ajudar muitas famílias.</p>
            <button>Cadastrar Profissional</button>
            <button>Compartilhar Local</button>
            </div>
        </section>

    )
}

export default Corpo;

