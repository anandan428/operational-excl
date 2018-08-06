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
      {/* <Home /> */}
    </main>
  </div>
)

export default App;
