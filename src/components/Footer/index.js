// components/Footer.js
import { useTheme } from '../ThemeContext';
import styles from './style.module.css';

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return <footer className={`${styles.footer} ${isDarkTheme ? styles.dark : styles.light}`}>Footer content</footer>;
};

export default Footer;
