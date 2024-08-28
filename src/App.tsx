import React from 'react';
// @ts-ignore
import logo from './SpartanLogo.png';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';

import About from './About'


function App() {
    const navigate

    function AboutButton() {

    }

    function ProjectsButton() {

    }

    function ContactButton() {

    }

  return (
    <div className="App">
      <header className="header">
          <img src={logo} alt="logo" className="logo"></img>
          <div className="navbar_top">
              <button type="button" onClick={ProjectsButton}>Projects</button>
              <button type="button" onClick={ContactButton}>Contact</button>
          </div>
      </header>
        <main className="main">
            <div className="name">
              <h1>James Haver</h1>
              <button type="button" onClick={AboutButton}>About</button>
          </div>

      </main>

        <footer className="footer">
          <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
