import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    // Adaugă logica de autentificare aici
    console.log('Email:', email, 'Password:', password);
    // După autentificare cu succes, redirecționează utilizatorul către pagina principală
    navigate('/');
  };

  const handleRegister = () => {
    // Redirecționează utilizatorul către pagina de înregistrare
    navigate('/registration');
  };

  return (
    <div className={`${styles.container} ${styles.background}`}>
      <Header />

      <h2 className={styles.title}>LOG IN</h2>

      <form onSubmit={handleLogin} className={styles.form}>
        <label className={styles.label}>
          Email *
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Password *
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </label>

        <div className={styles.buttonContainer}>
          <Button type="submit" text="Log in" variant="colorButton" />
          <Button
            type="button"
            text="Register"
            variant="whiteButton"
            handlerFunction={handleRegister}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
