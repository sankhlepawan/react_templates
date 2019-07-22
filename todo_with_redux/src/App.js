import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import AddToDo from './components/AddToDo';
import ToDoView from './components/ToDoView';

class App extends Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <div className="jumbotron">
        <center><h1>To-Do</h1></center>
        <AddToDo></AddToDo>
        <ToDoView todos={this.props.todos}></ToDoView>
      </div>
      
      
    );
  }
}

const mapStateToProps = (state) => {
 return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps,null)(App);
