
// App.js
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import CustomRoutes from './routes/CustomRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 id='heading'>
       <Link to="/">Pokedex</Link> </h1>
      <CustomRoutes/>
    </div>
  );
}

export default App;

