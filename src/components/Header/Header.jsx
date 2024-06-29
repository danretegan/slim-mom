import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoImg from '../../images/logo.png';
import slimMomImg from '../../images/slimMom.png';
import logoDesktop from '../../images/logo-desktop.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImg} alt="Logo" className={styles.logoImg} />
        </Link>
        <Link to="/">
          <img src={slimMomImg} alt="Slim Mom" className={styles.slimMomImg} />
        </Link>
        <Link to="/">
          <img
            src={logoDesktop}
            alt="Logo Desktop"
            className={styles.logoDesktop}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <span className={styles.separator}></span>
        <Link to="/login" className={styles.link}>
          LOG IN
        </Link>
        <Link to="/registration" className={styles.link}>
          REGISTRATION
        </Link>
      </nav>
    </header>
  );
};

export default Header;
