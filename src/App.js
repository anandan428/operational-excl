import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Menu from './components/menu';
import Details from './components/details';

const App = () => (
  <div>
    <header>
      <Header />    
    </header>
    <main className="container">
      <Menu />
      <Route exact path="/" component = { Home } />
      <Route exact path="/details"  component = { Details }/>
    </main>
  </div>
)

export default App;
