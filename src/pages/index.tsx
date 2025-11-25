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
          <div className={styles.sobreContainer}>
            <div className={styles.sobreTexto}>
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
            </div>
          </div>

          {/* Experiência Profissional */}
          <div className={styles.experienciaContainer}>
            <h3 className={styles.subtituloSecaoInterno}>Experiência Profissional</h3>
            <div className={styles.experienciaCard}>
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
            </div>
          </div>
          
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
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/python.png" alt="Python" width={50} height={50} />
      <span>Python</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/sql.png" alt="SQL" width={50} height={50} />
      <span>SQL</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/git.png" alt="DevOps" width={50} height={50} />
      <span>DevOps</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/git.png" alt="Docker" width={50} height={50} />
      <span>Docker</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/git.png" alt="CI/CD" width={50} height={50} />
      <span>CI/CD</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/react.png" alt="React Native" width={50} height={50} />
      <span>React Native</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/next.png" alt="Spring Boot" width={50} height={50} />
      <span>Spring Boot</span>
      <p className={styles.skillLevel}>Intermediário</p>
    </div>
    <div className={styles.skillItem}>
      <Image src="/python.png" alt="FastAPI" width={50} height={50} />
      <span>FastAPI</span>
      <p className={styles.skillLevel}>Básico</p>
    </div>
  </div>
</section>

<section id="contato" className={styles.secao}>
          <h2 className={styles.tituloSecao}>Entre em Contato</h2>
          <p className={styles.subtituloSecao}>
            Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar!
          </p>
          <div className={styles.contatoContainer}>
            <div className={styles.contatoItem}>
              <div className={styles.contatoIconWrapper}>
                <svg className={styles.contatoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contatoInfo}>
                <span className={styles.contatoLabel}>Email</span>
                <a href="mailto:adelmouhaidly6@gmail.com" className={styles.contatoLink}>adelmouhaidly6@gmail.com</a>
              </div>
            </div>
            <div className={styles.contatoItem}>
              <div className={styles.contatoIconWrapper}>
                <svg className={styles.contatoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contatoInfo}>
                <span className={styles.contatoLabel}>Telefone</span>
                <span className={styles.contatoTexto}>(11) 91587-5111</span>
              </div>
            </div>
            <div className={styles.contatoItem}>
              <div className={styles.contatoIconWrapper}>
                <svg className={styles.contatoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={styles.contatoInfo}>
                <span className={styles.contatoLabel}>LinkedIn</span>
                <a href="https://www.linkedin.com/in/adelmouhaidly" target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>linkedin.com/in/adelmouhaidly</a>
              </div>
            </div>
            <div className={styles.contatoItem}>
              <div className={styles.contatoIconWrapper}>
                <svg className={styles.contatoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.contatoInfo}>
                <span className={styles.contatoLabel}>GitHub</span>
                <a href="https://github.com/AdelMouhaidly" target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>github.com/AdelMouhaidly</a>
              </div>
            </div>
          </div>
        </section>


        {/* Projetos em Destaque */}
        <section id="projetos" className={`${styles.secao} ${styles.fadeIn}`}>
          <h2 className={styles.tituloSecao}>Projetos em Destaque</h2>
          <p className={styles.subtituloSecao}>
            Alguns dos meus principais projetos que demonstram minhas habilidades e experiência
          </p>
          <div className={styles.gridProjetosDestaque}>
            {/* Projeto 1 - SkillBridge */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientAI}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>React Native</span>
                  <span className={styles.tagProjeto}>Java Spring</span>
                  <span className={styles.tagProjeto}>Python</span>
                  <span className={styles.tagProjeto}>AI</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>SkillBridge</h3>
                <p>
                  Plataforma inovadora de capacitação profissional voltada à transição energética e requalificação de talentos. Conecta profissionais a oportunidades de cursos e vagas sustentáveis, utilizando <strong>Inteligência Artificial Generativa (Google Gemini)</strong> para fornecer recomendações personalizadas e planos de estudos adaptados. Stack: <strong>Java Spring Boot</strong>, <strong>React Native</strong>, <strong>Python FastAPI</strong>, <strong>Oracle Database</strong>.
                </p>
                <div className={styles.botoesProjeto}>
                  <a
                    href="https://github.com/AdelMouhaidly/SkillBridgeMobileGS2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.botaoGitHub}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 2 - ChargeMap Next.js */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientNext}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>Next.js</span>
                  <span className={styles.tagProjeto}>TypeScript</span>
                  <span className={styles.tagProjeto}>Full Stack</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>ChargeMap - Next.js</h3>
                <p>
                  Aplicação web completa que facilita a localização e roteirização de pontos de carregamento para veículos elétricos. O sistema permite reserva de 
                  carregadores, oferece suporte emergencial com envio de carregadores portáteis e inclui tela de login integrada ao banco de dados SQL. O projeto conta com planos de assinatura e foi desenvolvido utilizando <strong>Next.js</strong> com <strong>TypeScript</strong>, garantindo performance, escalabilidade e robustez.
                </p>
                <div className={styles.botoesProjeto}>
                  <a
                    href="https://github.com/AdelMouhaidly/ChargeMapProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.botaoGitHub}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 3 - NeoMoto Challenge */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientMobile}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>React Native</span>
                  <span className={styles.tagProjeto}>TypeScript</span>
                  <span className={styles.tagProjeto}>Mobile</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>NeoMoto Challenge</h3>
                <p>
                  Aplicativo mobile desenvolvido em <strong>React Native</strong> para o desafio NeoMoto. Focado em experiência do usuário e performance em dispositivos móveis, o projeto demonstra habilidades avançadas em desenvolvimento mobile com <strong>TypeScript</strong>, navegação eficiente e integração com APIs externas.
                </p>
                <div className={styles.botoesProjeto}>
                  <a
                    href="https://github.com/AdelMouhaidly/Challenge4NeoMoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.botaoGitHub}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 4 - ChargeMap Python */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientPython}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 5H15M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>Python</span>
                  <span className={styles.tagProjeto}>SQL</span>
                  <span className={styles.tagProjeto}>Backend</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>ChargeMap - Python</h3>
                <p>
                  Sistema interativo desenvolvido em <strong>Python</strong> com integração ao banco de dados <strong>SQL</strong> para auxiliar motoristas de veículos elétricos. O sistema conta com tela de login autenticada e funcionalidades essenciais: encontrar 
                  pontos de carregamento próximos, fazer reservas, estimar tempo de carregamento, sistema de pagamento integrado e visualização de planos disponíveis. Desenvolvido com foco em eficiência, usabilidade e segurança.
                </p>
                <div className={styles.botoesProjeto}>
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
            </div>

            {/* Projeto 5 - NeoMoto DevOps */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientDevOps}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1V5M12 19V23M23 12H19M5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.36 5.64L15.54 8.46M8.46 15.54L5.64 18.36M18.36 18.36L15.54 15.54M8.46 8.46L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>DevOps</span>
                  <span className={styles.tagProjeto}>CI/CD</span>
                  <span className={styles.tagProjeto}>Docker</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>NeoMoto DevOps</h3>
                <p>
                  Implementação completa de pipeline <strong>DevOps</strong> para o projeto NeoMoto. Inclui configuração de <strong>CI/CD</strong>, containerização com <strong>Docker</strong>, automação de deploy e monitoramento. Demonstra práticas modernas de DevOps, incluindo integração contínua, entrega contínua e infraestrutura como código.
                </p>
                <div className={styles.botoesProjeto}>
                  <a
                    href="https://github.com/AdelMouhaidly/NeoMotoDevops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.botaoGitHub}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 6 - CP06 DevOps */}
            <div className={styles.cartaoProjetoDestaque}>
              <div className={`${styles.imagemProjetoContainer} ${styles.gradientCloud}`}>
                <div className={styles.projetoIconWrapper}>
                  <svg className={styles.projetoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10H19C20.6569 10 22 11.3431 22 13C22 14.6569 20.6569 16 19 16H18M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10M18 10C18 10 18 10 18 10ZM6 10H5C3.34315 10 2 11.3431 2 13C2 14.6569 3.34315 16 5 16H6M6 10C6 10 6 10 6 10ZM12 20V14M9 17L12 20L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.overlayProjeto}>
                  <span className={styles.tagProjeto}>DevOps</span>
                  <span className={styles.tagProjeto}>Automação</span>
                  <span className={styles.tagProjeto}>Cloud</span>
                </div>
              </div>
              <div className={styles.conteudoProjeto}>
                <h3>CP06 DevOps</h3>
                <p>
                  Checkpoint de DevOps demonstrando competências em automação de infraestrutura, gerenciamento de configuração e práticas de deployment. Implementa soluções escaláveis utilizando ferramentas modernas de <strong>DevOps</strong>, com foco em eficiência operacional e confiabilidade de sistemas.
                </p>
                <div className={styles.botoesProjeto}>
                  <a
                    href="https://github.com/AdelMouhaidly/Cp06Devops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.botaoGitHub}
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
          
          {/* Comentário sobre novos projetos */}
          <div className={styles.comentarioProjetos}>
            <p>
              Estou constantemente produzindo novos projetos para aprimorar minhas habilidades. 
              Acompanhe meu progresso no <strong>GitHub</strong>.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
