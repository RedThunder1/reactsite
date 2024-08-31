import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './Styles/App.css';

import Home from "./Components/Home";
import About from "./Components/About";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/about" Component={About}/>
          </Routes>
          <div className="circleContainer">
              <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>

      </div>
  );
}

export default App;
