import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './DiaryAddProductForm.module.css';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import { BloodTypeContext } from '../../context/BloodTypeContext';

const DiaryAddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { bloodType } = useContext(BloodTypeContext);

  useEffect(() => {
    const fetchProductSuggestions = async () => {
      if (!productName) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(
          'http://localhost:3000/api/products/search',
          {
            params: { query: productName, bloodType },
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching product suggestions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductSuggestions();
  }, [productName, bloodType]);

  const handleSubmit = e => {
    e.preventDefault();
    // Logica pentru a adăuga produsul
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Enter product name*
              <input
                type="text"
                value={productName}
                onChange={e => setProductName(e.target.value)}
                className={styles.input}
                required
              />
            </label>
            {loading && <p>Loading...</p>}
            {suggestions.length > 0 && (
              <ul className={styles.suggestions}>
                {suggestions.map(suggestion => (
                  <li
                    key={suggestion._id}
                    onClick={() => setProductName(suggestion.title)}
                  >
                    {suggestion.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Grams*
              <input
                type="number"
                value={grams}
                onChange={e => setGrams(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <Button
            type="submit"
            text="Add"
            variant="colorButton"
            size="size180"
          />
        </form>
      </div>
    </>
  );
};

export default DiaryAddProductForm;
