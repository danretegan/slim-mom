import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';
import styles from './Header.module.css';
import logoImg from '../../images/logo.png';
import slimMomImg from '../../images/slimMom.png';
import logoDesktop from '../../images/logo-desktop.png';

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      setAuth({ token: null, isAuthenticated: false });
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

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
        {auth.isAuthenticated ? (
          <>
            <Link to="/diary" className={styles.link}>
              DIARY
            </Link>
            <Link to="/calculator" className={styles.link}>
              CALCULATOR
            </Link>
            <Link to="/user" className={styles.link}>
              User
            </Link>
            <button onClick={handleLogout} className={styles.button}>
              Exit
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.link}>
              LOG IN
            </Link>
            <Link to="/registration" className={styles.link}>
              REGISTRATION
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
