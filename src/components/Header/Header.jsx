import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../api/axios';
import styles from './Header.module.css';
import logoImg from '../../images/logo.png';
import slimMomImg from '../../images/slimMom.png';
import logoDesktop from '../../images/logo-desktop.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);

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

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoImg} alt="Logo" className={styles.logoImg} />
          </Link>
          {/* USERUL ESTE AUTENTIFICAT */}
          {auth.isAuthenticated && (
            <Link to="/">
              <img
                src={slimMomImg}
                alt="Slim Mom"
                className={styles.slimMomImg}
              />
            </Link>
          )}
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
          {/* USERUL ESTE AUTENTIFICAT */}
          {auth.isAuthenticated ? (
            <>
              <div className={styles.burgerContainer}>
                <BurgerMenu />
              </div>
            </>
          ) : (
            <>
              {/* userul NU este autentificat! */}
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
      {/* USERUL ESTE AUTENTIFICAT */}
      {auth.isAuthenticated && (
        <section className={styles.userSection}>
          {auth.user && (
            <>
              <span className={styles.user}>{auth.user.name}</span>
              <span className={styles.verticalLine}></span>
              <button onClick={handleLogout} className={styles.button}>
                Exit
              </button>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default Header;
