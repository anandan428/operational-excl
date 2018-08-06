import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Menu from './components/menu';

const App = () => (
  <div>
    <header>
      <Header />    
    </header>
    <main className="container">
      <Menu />
<<<<<<< HEAD
      {/* <Home /> */}
=======
      <Home />
>>>>>>> cfbc3ee986f4870d03ab4d2da9a1cc60ce5cadb3
    </main>
  </div>
)

export default App;
