import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationPage.module.css';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Adaugă logica de înregistrare aici
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    // După înregistrare cu succes, redirecționează utilizatorul către pagina de login
    navigate('/login');
  };

  const handleLogin = () => {
    // Redirecționează utilizatorul către pagina de login
    navigate('/login');
  };

  return (
    <div className={`${styles.container} ${styles.background}`}>
      <Header />

      <h2 className={styles.title}>REGISTER</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name *
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className={styles.input}
            required
          />
        </label>

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
          <Button type="submit" text="Register" variant="colorButton" />
          <Button
            type="button"
            text="Log in"
            variant="whiteButton"
            handlerFunction={handleLogin}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
