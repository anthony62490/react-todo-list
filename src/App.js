import React, { Component } from 'react';
import Todo from './components/todo.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
