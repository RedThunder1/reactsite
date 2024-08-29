import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Footer/>
          <App/>

      </BrowserRouter>
  </React.StrictMode>
);
