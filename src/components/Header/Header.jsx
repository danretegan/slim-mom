import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.css';
import logoImg from '../../images/logo.png';
import logoTablet from '../../images/logo-tablet.png';
import logoDesktop from '../../images/logo-desktop.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const handleLogout = async () => {
    try {
      const userName = auth.user ? auth.user.name : 'Unknown user';
      await axiosInstance.post('/auth/logout');
      setAuth({ token: null, isAuthenticated: false, user: null });
      console.log(`User ${userName} logged out successfully`);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  //* LOGO
  const renderLogo = () => {
    if (isMobile) {
      //* Mobil
      return (
        <img
          src={auth.isAuthenticated ? logoTablet : logoImg} // Autentificat: logoTablet, Neautentificat: logoImg
          alt="Logo"
          className={auth.isAuthenticated ? styles.logoTablet : styles.logoImg}
        />
      );
    } else if (isTablet) {
      //* Tabletă
      return (
        <img src={logoTablet} alt="Logo Tablet" className={styles.logoTablet} />
      );
    } else if (isDesktop) {
      //* Desktop
      return (
        <img
          src={logoDesktop}
          alt="Logo Desktop"
          className={styles.logoDesktop}
        />
      );
    }
  };

  //* NavLinks
  const renderNavLinks = () => {
    if (auth.isAuthenticated) {
      //* Autentificat
      return isDesktop ? (
        //* Desktop
        <>
          <span className={styles.verticalLineDesktop}></span>
          <Link to="/diary" className={styles.link}>
            DIARY
          </Link>
          <Link to="/calculator" className={styles.link}>
            CALCULATOR
          </Link>
          <div className={styles.userSection}>
            <span className={styles.user}>{auth.user.name}</span>
            <span className={styles.verticalLine}></span>
            <button onClick={handleLogout} className={styles.button}>
              Exit
            </button>
          </div>
        </>
      ) : isTablet ? (
        //* Tabletă
        <>
          <div className={styles.userSection}>
            <span className={styles.user}>{auth.user.name}</span>
            <span className={styles.verticalLine}></span>
            <button onClick={handleLogout} className={styles.button}>
              Exit
            </button>
          </div>
          <div className={styles.burgerContainer}>
            <BurgerMenu />
          </div>
        </>
      ) : (
        //* Mobil
        <>
          <div className={styles.burgerContainer}>
            <BurgerMenu />
          </div>
        </>
      );
    } else {
      //* Neautentificat
      return (
        <>
          <span className={styles.verticalLineDesktop}></span>
          <Link to="/login" className={styles.link}>
            LOG IN
          </Link>
          <Link to="/registration" className={styles.link}>
            REGISTRATION
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">{renderLogo()}</Link>
        </div>
        <nav className={styles.nav}>{renderNavLinks()}</nav>
      </header>
      {isMobile &&
        auth.isAuthenticated && ( //* Mobil + Autentificat
          <section className={styles.userSectionMobile}>
            <button
              className={styles.backButton}
              onClick={() => window.history.back()}
            ></button>
            <div className={styles.userContainer}>
              <span className={styles.user}>{auth.user.name}</span>
              <span className={styles.verticalLine}></span>
              <button onClick={handleLogout} className={styles.button}>
                Exit
              </button>
            </div>
          </section>
        )}
    </>
  );
};

export default Header;
