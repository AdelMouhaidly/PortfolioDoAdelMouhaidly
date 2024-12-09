import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.nomeBranco}>Adel Mouhaidly</span> | Meu Portfólio
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li> 
        </ul>
      </nav>
    </header>
  );
}
