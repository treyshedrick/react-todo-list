import React, { Component } from 'react';
// import components into App
import Todo from './components/Todo';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>react-todo-list</h1>
        <Todo />
      </div>
    );
}
}
export default App;
