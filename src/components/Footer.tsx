export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[var(--border-color)] bg-[var(--footer-bg)] py-6 text-center text-sm text-[var(--muted-text-color)]">
      <p>
        © {new Date().getFullYear()} Adel Mouhaidly. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
