import React, { Component } from 'react';
import './Todo.css';
import { AddToDo } from './components';

class Todo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todoList : []
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <center><h1>To-Do</h1></center>
        <AddToDo onToDoAdd={(data) => this.onToDoAdd(data)}></AddToDo>
        <ul>{this.getTodoList()}</ul>
      </div>
      
    );
  }

  getTodoList() {
    let list = [];
    this.state.todoList.forEach((todo,index) => {
       list.push(<li key={index}>{todo}</li>)
    })
    return list;
  }

  onToDoAdd(todo) {
    console.log(todo);
    let list = [...this.state.todoList, todo];
    this.setState({
      todoList : list
    })
   }
}

export default Todo;
