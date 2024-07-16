import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="language-switcher">
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="ro">Română</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
