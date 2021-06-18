import React, { Component } from 'react';
import InputBox from './components/InputBox/InputBox';
import TodoList from './components/TodoList/TodoList';
class App extends Component {
  state = {
    todos: [
    ]
  }
  deleteTodos = (id) => {
    let updatedtodos = this.state.todos.filter(function (obj) {
      return id != obj.id;
    })
    this.setState({
      todos: updatedtodos
    })
  }

  addTodo = (todo) => {
    let updatedTodos = [
      ...this.state.todos,
      { id: this.state.todos.length + 1, todo: todo },
    ];
    this.setState({
      todos: updatedTodos
    })
  };
  render() {
    let todos = this.state.todos;
    let deletefxn = this.deleteTodos;
    return (
      <div className="App">
        <InputBox addtodos={this.addTodo}></InputBox>
        <TodoList todos={todos} deleteTodos={deletefxn}></TodoList>
      </div>
    );
  }
}

export default App;