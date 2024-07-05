import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage';
import DiaryAddProductForm from '../components/DiaryAddProductForm/DiaryAddProductForm';
import AuthProvider from '../context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/slim-mom">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/add-product" element={<DiaryAddProductForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
