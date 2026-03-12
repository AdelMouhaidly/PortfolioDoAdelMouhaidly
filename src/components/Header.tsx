import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    const initial = stored === "dark" ? "dark" : "light";

    setTheme(initial);
    document.body.dataset.theme = initial;
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (typeof document !== "undefined") {
      document.body.dataset.theme = nextTheme;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--header-bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-tight text-[var(--text-color)] sm:text-base">
          Adel Mouhaidly
          <span className="ml-1 text-xs font-normal text-[var(--muted-text-color)] sm:text-sm">
            · Desenvolvedor Full Stack
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted-text-color)] md:flex">
          <a href="#sobre" className="hover:text-[var(--accent-color)]">
            Sobre
          </a>
          <a href="#habilidades" className="hover:text-[var(--accent-color)]">
            Habilidades
          </a>
          <a href="#projetos" className="hover:text-[var(--accent-color)]">
            Projetos
          </a>
          <a href="#contato" className="hover:text-[var(--accent-color)]">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden rounded-full border border-[var(--border-color)] px-3 py-1 text-xs font-medium text-[var(--muted-text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] sm:inline-flex"
          >
            {theme === "light" ? "Modo escuro" : "Modo claro"}
          </button>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            className="flex flex-col gap-1.5 rounded md:hidden"
          >
            <span className="h-0.5 w-5 bg-[var(--text-color)]" />
            <span className="h-0.5 w-5 bg-[var(--text-color)]" />
            <span className="h-0.5 w-5 bg-[var(--text-color)]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--border-color)] bg-[var(--surface-color)] py-3 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-sm text-[var(--text-color)]">
            <a href="#sobre" className="py-1" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
            <a
              href="#habilidades"
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Habilidades
            </a>
            <a
              href="#projetos"
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Projetos
            </a>
            <a
              href="#contato"
              className="py-1"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
