import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles['App-header']}>
      <h1 className={styles['App-title']}>Personal Project App</h1>
    </header>
  );
}

export default Header;