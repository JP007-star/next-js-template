// components/Header.js
import { useTheme } from '../ThemeContext';
import styles from './style.module.css';

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDarkTheme ? styles.dark : styles.light}`}>
      <img className={styles.logo}src={`${isDarkTheme ?  'logo_light.png' : 'logo.png'}` }></img>
      <div className={styles.switchContainer}>
        <span>Light</span>
        <label className={styles.switch}>
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className={`${styles.slider} ${styles.round}`} />
        </label>
        <span>Dark</span>
      </div>
    </header>
  );
};

export default Header;
