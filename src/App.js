import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Menu from './components/menu';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <header>
      <Header />    
    </header>
    <main className="container">
      <Menu />
      <Home />
    </main>
    {/* <main>
      <Route exact path="/" component = { Home } />
      <Route exact path="/about-us" component = { About } />
    </main> */}
  </div>
)

export default App;
