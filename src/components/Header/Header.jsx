import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles['App-header']}>
      <h1 className={styles['App-title']}>My Portfolio App</h1>
    </header>
  );
}

export default Header;