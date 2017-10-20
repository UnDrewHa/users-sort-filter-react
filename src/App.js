import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Owls from './Owls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hello from Owls
              </h1>
              <h2 class="subtitle">
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
