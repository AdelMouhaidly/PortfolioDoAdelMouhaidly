import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/portfolio.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adel Mouhaidly | Portfólio</title>
        <meta name="description" content="Portfólio do Adel" />
        <link rel="icon" href="/icon.webp" />
      </Head>

      <main className={styles.container}>
        <Header />

        {/* Hero */}
        <section className={`${styles.hero} ${styles.fadeIn}`}>
          <div className={styles.textoHero}>
            <h1>
              Transformar ideias em <br />
              produtos da <span className={styles.destaque}>vida real</span> <br />
              é minha missão.
            </h1>
            <a href="#projetos" className={styles.botaoCta}>
              Ver Projetos
            </a>
          </div>
          <div className={styles.imagemHero}>
            <Image
              src="/Adel.png"
              alt="Foto do desenvolvedor"
              width={400}
              height={400}
              className={styles.fotoPerfil}
            />
          </div>
        </section>

        {/* Sobre Mim */}
        <section id="sobre" className={styles.secao}>
  <h2 className={styles.tituloSecao}>Sobre Mim</h2>
  <p>
    Olá! Meu nome é <strong>Adel Mouhaidly</strong>, sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e estou atualmente cursando o <strong>terceiro semestre</strong> na <strong>Universidade FIAP</strong>, campus Aclimação. Minha paixão pela tecnologia me impulsiona a buscar 
    constantemente novos desafios e aprimorar minhas habilidades.
  </p>
  <p>
    Estou me especializando na área de <strong>desenvolvimento Full Stack</strong>, com foco principal no <strong>Front-End</strong>. Tenho sólidos conhecimentos em <strong>React</strong> e <strong>Next.js</strong>, criando 
    interfaces modernas, responsivas e intuitivas. Além disso, possuo familiaridade com outras áreas, como <strong>Back-End</strong> e bancos de dados, o que me permite contribuir de maneira integrada em projetos completos.
  </p>
  <p>
    Estou sempre <strong>disposto a aprender</strong> e me desenvolver ainda mais como profissional. Busco oportunidades 
    onde possa aplicar minhas habilidades e colaborar em projetos que gerem impacto positivo.
  </p>

  {/* Experiência Profissional */}
  <h2 className={styles.tituloSecao}>Experiência Profissional</h2>
  <p>
    No momento, ainda não possuo experiência profissional na área de tecnologia, mas estou <strong>em busca</strong> de uma 
    oportunidade para ingressar no mercado. Minha dedicação em aprender e minha paixão por tecnologia são os pilares 
    que me movem a buscar sempre o <strong>meu melhor</strong>.
  </p>
  <p>
    Tenho investido meu tempo em cursos, projetos pessoais e estudos constantes para me tornar um profissional 
    competente e preparado. Cada projeto é uma nova chance de aprender e evoluir, e eu estou pronto para enfrentar 
    desafios e contribuir com o sucesso de uma equipe ou empresa.
  </p>
  
  {/* Mensagem Inspiradora */}
  <p className={styles.mensagemFinal}>
  &quot;O conhecimento é infinito, e o desejo de aprender é o que nos leva além. Estou preparado para crescer, colaborar 
  e fazer a diferença no mundo da tecnologia.&quot;
  </p>
</section>



        {/* Habilidades */}
        <section id="habilidades" className={styles.secao}>
  <h2 className={styles.tituloSecao}>Minhas Habilidades</h2>
  <div className={styles.skillsContainer}>
    <div className={styles.skillItem}>
      <Image src="/html.png" alt="HTML" width={50} height={50} />
      <span>HTML</span>
      <p className={styles.skillLevel}>Avançado</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/css.png" alt="CSS" width={50} height={50} />
      <span>CSS</span>
      <p className={styles.skillLevel}>Avançado</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/javascripticon.png" alt="JavaScript" width={50} height={50} />
      <span>JavaScript</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/react.png" alt="React" width={50} height={50} />
      <span>React JS</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/next.png" alt="Next.js" width={50} height={50} />
      <span>Next.js</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/git.png" alt="Git" width={50} height={50} />
      <span>Git</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/typescript.png" alt="TypeScript" width={50} height={50} />
      <span>TypeScript</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/java.webp" alt="Java" width={50} height={50} />
      <span>Java</span>
      <p className={styles.skillLevel}>Básico</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/python.png" alt="Python" width={50} height={50} />
      <span>Python</span>
      <p className={styles.skillLevel}>Básico</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/sql.png" alt="SQL" width={50} height={50} />
      <span>SQL</span>
      <p className={styles.skillLevel}>Básico</p>
    </div>
  </div>
</section>

<section id="contato" className={styles.secao}>
          <h2 className={styles.tituloSecao}>Contate-me</h2>
          <div className={styles.contatoContainer}>
            <div className={styles.contatoItem}>
              <strong>Email:</strong>
              <a href="mailto:adelmouhaidly6@gmail.com">adelmouhaidly6@gmail.com</a>
            </div>
            <div className={styles.contatoItem}>
              <strong>Telefone:</strong>
              <span>(11) 94254-8605</span>
            </div>
            <div className={styles.contatoItem}>
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/adel-mouhaidly-bb5877339/" target="_blank" rel="noopener noreferrer">
              www.linkedin.com/in/adel-mouhaidly-bb5877339/
              </a>
            </div>
            <div className={styles.contatoItem}>
              <strong>GitHub:</strong>
              <a href="https://github.com/AdelMouhaidly" target="_blank" rel="noopener noreferrer">
              https://github.com/AdelMouhaidly
              </a>
            </div>
          </div>
        </section>


        {/* Projetos */}
        <section id="projetos" className={`${styles.secao} ${styles.fadeIn}`}>
  <h2 className={styles.tituloSecao}>Meus Projetos</h2>
  <div className={styles.gridProjetos}>
    {/* Projeto 1 */}
    <div className={styles.cartaoProjeto}>
      <Image src="/chargemapnext.png" alt="Projeto 1" width={400} height={200} />
      <h3>ChargeMap feito em Next.js</h3>
      <p>
      <strong>ChargeMap:</strong> Desenvolvi uma aplicação web que facilita a localização e roteirização de pontos de carregamento para veículos elétricos. O sistema permite a reserva de 
      carregadores e oferece suporte emergencial com envio de carregadores portáteis em caso de bateria insuficiente, inclui uma tela de login integrada ao banco de dados, permitindo autenticação e manipulação eficiente de dados com SQL .  O projeto conta com planos de assinatura e foi criado utilizando <strong>Next.js</strong> com <strong>TypeScript</strong>, garantindo performance, escalabilidade e robustez.
      </p>
      <a
        href="https://github.com/AdelMouhaidly/ChargeMapProject"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botaoGitHub}
      >
        Ver no GitHub
      </a>
    </div>

    {/* Projeto 2 */}
    <div className={styles.cartaoProjeto}>
      <Image src="/chargemapfront.png" alt="Projeto 2" width={400} height={200} />
      <h3>ChargeMap feito em Python</h3>
      <p>
      Desenvolvi um sistema interativo em <strong>Python</strong> com integração ao banco de dados <strong>SQL</strong> para auxiliar motoristas de veículos elétricos. O sistema conta com uma tela de login autenticada e funcionalidades essenciais, como encontrar 
      pontos de carregamento próximos, fazer reservas de carregadores, estimar o tempo de carregamento, sistema de pagamento integrado e visualização de planos disponíveis. A aplicação foi desenvolvida com foco em eficiência, usabilidade e segurança, proporcionando uma solução prática e robusta para o gerenciamento de carregamentos.
      </p>
      <a
        href="https://github.com/AdelMouhaidly/ChargeMapPython"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botaoGitHub}
      >
        Ver no GitHub
      </a>
    </div>
  </div>

  {/* Comentário sobre novos projetos */}
  <div className={styles.comentarioProjetos}>
    <p>
      Estou constantemente produzindo novos projetos para aprimorar minhas habilidades e aprender mais. 
      Fique à vontade para acompanhar meu progresso através do meu <strong>GitHub</strong>!
    </p>
  </div>
</section>


        <Footer />
      </main>
    </>
  );
}
