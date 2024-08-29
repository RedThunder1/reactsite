import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';

import Home from "./Components/Home";
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
