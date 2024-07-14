import React from 'react';
import CalorieForm from 'components/CalorieForm/CalorieForm';
import Header from 'components/Header/Header';
import Summary from 'components/Summary/Summary';

const Calculator = () => {
  return (
    <div>
      <Header />

      <CalorieForm />
      <Summary />
    </div>
  );
};

export default Calculator;
