import Head from "next/head";
import Image from "next/image";
import { FormEvent, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const skills = [
  // Frontend
  { name: "HTML", img: "/html.png", level: "Avançado" },
  { name: "CSS", img: "/css.png", level: "Avançado" },
  { name: "JavaScript", img: "/javascripticon.png", level: "Intermediário" },
  { name: "TypeScript", img: "/typescript.png", level: "Intermediário" },
  { name: "React JS", img: "/react.png", level: "Intermediário" },
  { name: "Next.js", img: "/next.svg", level: "Intermediário" },
  { name: "React Native", img: "/reactnative.png", level: "Intermediário" },
  // Backend & dados
  { name: "Java", img: "/java.png", level: "Intermediário" },
  { name: "Spring Boot", img: "/java.png", level: "Intermediário" },
  { name: "Python", img: "/python.png", level: "Básico" },
  { name: "FastAPI", img: "/python.png", level: "Básico" },
  { name: "SQL", img: "/sql.png", level: "Intermediário" },
  // DevOps & ferramentas
  { name: "Git", img: "/git.png", level: "Intermediário" },
  { name: "DevOps", img: "/devops.png", level: "Básico" },
  { name: "Docker", img: "/docker.png", level: "Básico" },
  { name: "CI/CD", img: "/vercel.svg", level: "Básico" },
];

const projects = [
  {
    title: "SkillBridge",
    tags: ["React Native", "Java Spring", "Python", "AI"],
    description:
      "Plataforma de capacitação profissional voltada à transição energética e requalificação de talentos, com recomendações personalizadas usando IA generativa.",
    problem:
      "Empresas e profissionais têm dificuldade em mapear quais competências são necessárias para a transição energética e como se requalificar de forma direcionada.",
    solution:
      "Criei um app mobile e backend que sugerem trilhas de aprendizado personalizadas usando IA generativa, conectando habilidades atuais do usuário com as competências exigidas pelo mercado.",
    link: "https://github.com/AdelMouhaidly/SkillBridgeMobileGS2",
  },
  {
    title: "ChargeMap - Next.js",
    tags: ["Next.js", "TypeScript", "Full Stack"],
    description:
      "Aplicação web para localizar e reservar pontos de carregamento para veículos elétricos, com login, planos de assinatura e integração com banco SQL.",
    problem:
      "Motoristas de veículos elétricos precisam encontrar rapidamente pontos de carga confiáveis, evitando chegar em estações lotadas ou fora de operação.",
    solution:
      "Desenvolvi uma aplicação full stack em Next.js com autenticação, planos de assinatura e reserva de estações, persistindo dados em um banco SQL para garantir histórico e previsibilidade.",
    link: "https://github.com/AdelMouhaidly/ChargeMapProject",
  },
  {
    title: "NeoMoto Challenge",
    tags: ["React Native", "TypeScript", "Mobile"],
    description:
      "App mobile focado em experiência do usuário e performance para o desafio NeoMoto, integrando APIs externas.",
    problem:
      "O desafio pedia um app de mobilidade com navegação fluida e informações em tempo real, sem sacrificar desempenho em dispositivos modestos.",
    solution:
      "Implementei um app em React Native com navegação otimizada, consumo eficiente de APIs externas e foco em UI responsiva, reduzindo carregamentos desnecessários.",
    link: "https://github.com/AdelMouhaidly/Challenge4NeoMoto",
  },
  {
    title: "ChargeMap - Python",
    tags: ["Python", "SQL", "Backend"],
    description:
      "Sistema em Python com banco SQL para apoiar motoristas de veículos elétricos com login, reservas, estimativa de tempo e planos.",
    problem:
      "Era necessário um backend robusto para sustentar regras de negócio do ChargeMap mesmo sem a interface web, centralizando lógica de reservas e cálculos.",
    solution:
      "Modelei a lógica de reservas, planos e estimativas em Python com banco SQL, separando camadas de persistência e regras de negócio para facilitar manutenção e integrações futuras.",
    link: "https://github.com/AdelMouhaidly/ChargeMapPython",
  },
  {
    title: "NeoMoto DevOps",
    tags: ["DevOps", "CI/CD", "Docker"],
    description:
      "Pipeline de CI/CD e automações com Docker para o projeto NeoMoto, cobrindo build, testes e deploy.",
    problem:
      "O projeto NeoMoto precisava de um fluxo confiável de build, testes e deploy para evitar erros manuais e garantir entregas consistentes.",
    solution:
      "Configurei pipelines de CI/CD com Docker, automatizando build, execução de testes e deploy, reduzindo riscos de falhas manuais e deixando o ciclo de entrega mais previsível.",
    link: "https://github.com/AdelMouhaidly/NeoMotoDevops",
  },
  {
    title: "CP06 DevOps",
    tags: ["DevOps", "Automação", "Cloud"],
    description:
      "Checkpoint de DevOps com foco em automação de infraestrutura, configuração e deployment em cloud.",
    problem:
      "A disciplina exigia demonstrar domínio em automação de infraestrutura e deploy em nuvem, reduzindo atividades manuais de configuração.",
    solution:
      "Implementei scripts e pipelines de automação para provisionar recursos, configurar ambiente e realizar deploy em cloud, documentando o fluxo para facilitar replicação.",
    link: "https://github.com/AdelMouhaidly/Cp06Devops",
  },
];

const CONTACT_EMAIL = "adelmouhaidly6@gmail.com";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(".js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!email || !message) {
      alert("Por favor, preencha pelo menos email e mensagem.");
      return;
    }

    const subject = encodeURIComponent(
      `Contato pelo portfólio - ${name || "Interessado(a)"}`
    );
    const bodyLines = [
      `Nome: ${name || "não informado"}`,
      `Email: ${email}`,
      "",
      "Mensagem:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    // Abre o Gmail no navegador (nova aba com rascunho preenchido)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    event.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>Adel Mouhaidly | Portfólio</title>
        <meta name="description" content="Portfólio do Adel" />
        <link rel="icon" href="/icon.webp" />
      </Head>

      <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <Header />

        {/* Hero */}
        <section className="js-reveal border-b border-[var(--border-color)] bg-[var(--surface-color)]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 px-4 pt-20 pb-16 md:flex-row md:pt-24">
            <div className="space-y-5 text-center md:max-w-xl md:text-left">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-text-color)]">
                Portfólio · Desenvolvimento de software
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-[var(--text-color)] sm:text-4xl md:text-5xl">
                Transformar ideias em
                <br />
                produtos da{" "}
                <span className="text-[var(--accent-color)]">vida real</span>
                <br />
                é minha missão.
              </h1>
              <p className="text-sm text-[var(--muted-text-color)]">
                Desenvolvedor Full Stack em início de carreira, com foco em
                front-end usando React e Next.js e interesse em back-end e
                DevOps. Gosto de criar interfaces simples, claras e objetivas.
              </p>

              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--accent-color)] px-5 py-2.5 text-sm font-medium text-[var(--accent-color)] transition-colors hover:bg-[var(--accent-color)] hover:text-white"
                >
                  Ver projetos
                </a>
                <a
                  href="/adel-mouhaidly-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--accent-color)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform transition-colors hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Baixar CV
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/Adel.png"
                alt="Foto do desenvolvedor"
                width={320}
                height={320}
                className="h-auto max-w-[260px] rounded-2xl border border-[var(--border-color)] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section
          id="sobre"
          className="js-reveal mx-auto mt-16 w-full max-w-5xl border-l-4 border-[var(--accent-color-soft)] bg-transparent px-6 py-10 sm:px-8"
        >
          <h2 className="mb-3 text-2xl font-semibold">Sobre mim</h2>
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[var(--muted-text-color)]">
            Quem eu sou, como trabalho e onde já atuei
          </p>

          <div className="space-y-4 text-[0.95rem] text-[var(--muted-text-color)]">
            <p>
              Olá! Meu nome é <strong>Adel Mouhaidly</strong>, sou{" "}
              <strong>formado em Análise e Desenvolvimento de Sistemas</strong>{" "}
              pela <strong>FIAP</strong> e <strong>desenvolvedor Full Stack</strong>{" "}
              com foco atual em <strong>front-end</strong>. Na formação tive
              contato constante com projetos práticos e trabalho em equipe.
            </p>
            <p>
              No dia a dia estudo e construo interfaces utilizando{" "}
              <strong>React</strong>, <strong>Next.js</strong> e{" "}
              <strong>TypeScript</strong>, além de explorar{" "}
              <strong>Java</strong>, <strong>Python</strong>, bancos de dados e
              conceitos de <strong>DevOps</strong>. Gosto de código limpo,
              organização e de entender o impacto real das soluções.
            </p>
            <p>
              Ainda não tenho experiência profissional formal na área, mas já
              desenvolvi projetos acadêmicos e pessoais que me ajudaram a criar
              uma base sólida. Estou ativamente em busca da{" "}
              <strong>primeira oportunidade</strong> como desenvolvedor para
              aprender com um time mais experiente e contribuir com o que já
              sei.
            </p>
          </div>

          <div className="mt-8 space-y-3 rounded-xl bg-[var(--surface-color)]/60 p-5 text-[0.95rem] text-[var(--muted-text-color)] shadow-sm">
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              Experiência
            </h3>
            <p>
              No momento minha experiência é focada em{" "}
              <strong>projetos acadêmicos, desafios e iniciativas pessoais</strong>,
              onde atuo como desenvolvedor responsável por ir do desenho da
              solução até o deploy.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>SkillBridge</strong> — plataforma mobile e backend para
                capacitação profissional, integrando <strong>React Native</strong>,{" "}
                <strong>Java Spring</strong>, <strong>Python</strong> e uso de{" "}
                <strong>IA generativa</strong>.
              </li>
              <li>
                <strong>ChargeMap</strong> — aplicações em{" "}
                <strong>Next.js</strong> e <strong>Python</strong> focadas em rotas
                e reservas de pontos de carga para veículos elétricos, com{" "}
                <strong>banco SQL</strong> e autenticação.
              </li>
              <li>
                <strong>NeoMoto</strong> — desafios em <strong>React Native</strong>{" "}
                e <strong>DevOps</strong>, trabalhando com <strong>Docker</strong> e{" "}
                <strong>pipelines de CI/CD</strong> para automatizar build, testes
                e deploy.
              </li>
            </ul>
            <p>
              Em todos esses projetos procuro aplicar boas práticas como{" "}
              <strong>organização de pastas</strong>, <strong>commits claros</strong>{" "}
              e preocupação com <strong>experiência do usuário</strong>, para estar
              preparado para um ambiente profissional.
            </p>
          </div>
        </section>

        {/* Habilidades */}
        <section
          id="habilidades"
          className="js-reveal mx-auto mt-16 w-full max-w-5xl rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] px-6 py-10 sm:px-8"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            Minhas habilidades
          </h2>
          <p className="mb-6 text-sm text-[var(--muted-text-color)]">
            Tecnologias que já utilizei em projetos, estudos e atividades na FIAP
            e em iniciativas pessoais.
          </p>

          <div className="grid grid-cols-2 gap-5 text-sm sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex w-full flex-col items-start rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-5 shadow-sm transition-transform transition-shadow hover:-translate-y-1 hover:border-[var(--accent-color)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-color-soft)] shadow-inner transition-transform group-hover:scale-110">
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <span className="text-[0.9rem] font-semibold">
                  {skill.name}
                </span>
                <span className="mt-1 text-[0.75rem] uppercase tracking-wide text-[var(--muted-text-color)]">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section
          id="projetos"
          className="js-reveal mx-auto mt-16 mb-12 w-full max-w-5xl border-l-4 border-[var(--accent-color-soft)] bg-transparent px-6 py-10 sm:px-8"
        >
          <h2 className="mb-2 text-center text-2xl font-semibold">
            Projetos em destaque
          </h2>
          <p className="mb-8 text-center text-sm text-[var(--muted-text-color)]">
            Alguns projetos que mostram o tipo de problema que gosto de
            resolver.
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="js-reveal flex flex-col gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-4"
              >
                <div className="flex flex-wrap gap-2 text-[0.7rem]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--accent-color-soft)] px-2 py-0.5 text-[var(--accent-color)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-[var(--muted-text-color)]">
                  {project.description}
                </p>
                <div className="mt-1 space-y-1 text-xs text-[var(--muted-text-color)]">
                  <p>
                    <strong>Problema:</strong> {project.problem}
                  </p>
                  <p>
                    <strong>Minha solução:</strong> {project.solution}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex w-fit text-sm font-medium text-[var(--accent-color)]"
                >
                  Ver no GitHub
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--muted-text-color)]">
            Sempre que possível publico novos projetos e experimentos no meu{" "}
            <a
              href="https://github.com/AdelMouhaidly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-color)]"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="js-reveal mx-auto mt-12 mb-12 w-full max-w-5xl rounded-2xl border border-[var(--border-color)] bg-[var(--surface-color)] px-6 py-10 sm:px-8"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Entre em contato</h2>
              <p className="text-sm text-[var(--muted-text-color)]">
                Se você gostou dos projetos e acredita que eu posso ajudar seu
                time ou empresa, vamos conversar. Costumo responder com atenção
                às mensagens, explicando como posso contribuir e quais são os
                próximos passos.
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted-text-color)]">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:adelmouhaidly6@gmail.com"
                    className="text-[var(--accent-color)]"
                  >
                    adelmouhaidly6@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Telefone:</strong> (11) 91587-5111
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/adelmouhaidly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-color)]"
                  >
                    linkedin.com/in/adelmouhaidly
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/AdelMouhaidly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-color)]"
                  >
                    github.com/AdelMouhaidly
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-4 rounded-xl bg-[var(--surface-muted-color)] px-4 py-5 text-sm shadow-inner"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="rounded-md border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-2 outline-none ring-[var(--accent-color)] focus:ring-1"
                  placeholder="Como devo te chamar?"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-md border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-2 outline-none ring-[var(--accent-color)] focus:ring-1"
                  placeholder="Seu melhor email para resposta"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="resize-none rounded-md border border-[var(--border-color)] bg-[var(--surface-color)] px-3 py-2 outline-none ring-[var(--accent-color)] focus:ring-1"
                  placeholder="Conte um pouco sobre a vaga, projeto ou dúvida."
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[var(--accent-color)] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform transition-colors hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Enviar mensagem
              </button>
              <p className="text-[0.7rem] text-[var(--muted-text-color)]">
                Ao clicar, abre uma aba com o email, assunto e mensagem já
                preenchidos.
              </p>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
