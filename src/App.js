import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Owls from './Owls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Hello from Owls
              </h1>
              <h2 className="subtitle">
                Owls and React!
              </h2>
            </div>
          </div>
        </section>
        <Owls />
      </div>
    );
  }
}

export default App;
