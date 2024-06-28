// src/components/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  type = 'button',
  text,
  handlerFunction,
  variant,
  isDisabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={handlerFunction}
      className={`${styles.button} ${styles[variant]}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  text: PropTypes.string.isRequired,
  handlerFunction: PropTypes.func,
  variant: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
