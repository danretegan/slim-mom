import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import './index.css';
import AuthProvider from './context/AuthContext';
import { BloodTypeProvider } from './context/BloodTypeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider>
        <BloodTypeProvider>
          <BrowserRouter basename="/slim-mom">
            <App />
          </BrowserRouter>
        </BloodTypeProvider>
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);
