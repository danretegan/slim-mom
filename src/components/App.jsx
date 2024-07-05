import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage'; // Importați DiaryPage
import AuthProvider, { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return auth.isAuthenticated ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/slim-mom">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/diary"
            element={<PrivateRoute element={DiaryPage} />}
          />{' '}
          {/* Adăugat ruta DiaryPage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
