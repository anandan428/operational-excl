import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Menu from './components/menu';
import Details from './components/details';
import Resource from './components/resources';

const App = () => (
  <div className="hd">
    <header >
      <Header />
    </header>
    <main className="container">
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/resource" component={Resource} />
    </main>
  </div>
)

export default App;
