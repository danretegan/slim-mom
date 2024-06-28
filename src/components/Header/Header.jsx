import React from 'react';
import styles from './Header.module.css';
import logoImg from '../../images/logo.png';
import slimMomImg from '../../images/slimMom.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.logoImg} />
        <img src={slimMomImg} alt="Slim Mom" className={styles.slimMomImg} />
      </div>
      <nav className={styles.nav}>
        <a href="/login" className={styles.link}>
          LOG IN
        </a>
        <a href="/registration" className={styles.link}>
          REGISTRATION
        </a>
      </nav>
    </header>
  );
};

export default Header;
