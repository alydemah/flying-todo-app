import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import TodoItems from './components/TodoItems';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Flying ToDo App</h1>
          </div>
        <hr/>
        <AddItem />
        <div>Todo List</div>
        <TodoItems />

      </div>
    );
  }
}

export default App;
