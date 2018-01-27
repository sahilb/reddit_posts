import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import routes from './routes'
import Home from './home';

const log = console.log.bind(console);
log(routes);

class App extends Component {
  constructor(){
    super();

    this.state = {
      current: 'home'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My Reddit </h1>
        </header>
        <div className="content">
          <Home rows={[]} />
        </div>
      </div>
    );
  }
}


export default App;
