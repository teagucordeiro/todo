import logoImage from "/public/logo.svg";
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImage} alt="logo" />
    </header>
  );
}
