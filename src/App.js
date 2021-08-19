import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
        <div className='App'>
            <h1>Hi, this is my react app</h1>
            <p>
                Solved the installation issue by installing{' '}
                <strong>yarn</strong> with{' '}
                <strong>npm install --global yarn</strong>
        </p>
        <ul>
          <li><strong>Note:</strong> This can also be solved using npm rather than yarn but i had network issues, so had to consider yarn</li>
        </ul>
        <p>Also added a public folder which contains an <strong>index.html</strong></p>
        <h3>Happy Coding!</h3>
        </div>
    )
  }
  }

export default App;
