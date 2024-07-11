import React from 'react';
import CalorieForm from 'components/CalorieForm/CalorieForm';
import Header from 'components/Header/Header';
import Summary from 'components/Summary/Summary';

const Calculator = () => {
  return (
    <div>
      <Header />
      <h4>Calculator Page:</h4>
      <CalorieForm />
      <Summary />
    </div>
  );
};

export default Calculator;
