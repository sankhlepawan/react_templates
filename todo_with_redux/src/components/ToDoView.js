import React, { Component } from 'react';
import { removeTodoAction, editTodoAction } from '../actions/actions';
import { connect } from 'react-redux';


class ToDoView extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            showEdit : [],
            todos: [],
            updatedTodo:''
        }
       
    }

    removeToDoFromList =(item) => {
        this.props.removeToDo(item);
    }

    editTodoItem =(args, item) =>  {
       this.state.showEdit[args] = true;
       console.log(this.state.showEdit);
        this.setState({
            showEdit: this.state.showEdit,
            updatedTodo: item
        });
        
    }

    updateTodoItem =(index) => {
        this.state.showEdit[index] = false;
        this.state.todos[index] = this.state.updatedTodo;
        this.setState({
            showEdit: this.state.showEdit,
        });
        this.props.updateToDo(index,this.state.updatedTodo);
    }

    onToDoChange = (ev) => {
        let newValue = ev.target.value;
        this.setState({
            updatedTodo:newValue
        });
    }

    

    render() { 
        return ( 
            <ul>
            {
                
             this.props.todos.map((item,index) => (
                <li key={index} className="row" >
                
                    <span className={"col-sm-3 padding-5px"} >
                     { !this.state.showEdit[index] ? <span>{this.props.todos[index]}</span> : <input type="text" value={this.state.updatedTodo} onChange={(ev) => this.onToDoChange(ev)}></input> }
                    </span>
                    
                    <span className="col-sm-3"></span> 
                    <span className="col-sm-3">
                        <button className="btn btn-danger btn-sm" onClick={ () => this.removeToDoFromList(item) } >Remove</button>
                        <span className="col-sm-1"></span>
                        <button className="btn btn-primary btn-sm" onClick={ () => !this.state.showEdit[index] ? this.editTodoItem(index,item) : this.updateTodoItem(index,item) } > {!this.state.showEdit[index]  ? 'Edit' : 'Update' }</button>
                    </span>
                </li>
            ))
            }
            </ul>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeToDo: (todoIndex) => dispatch(removeTodoAction(todoIndex)),
        updateToDo: (todoIndex,updatedTodo)  => dispatch(editTodoAction(todoIndex,updatedTodo))
    }
}

const mapStateToProps = (state) => {
    return {
       todos: state.todos,
     }
   }

export default connect(mapStateToProps, mapDispatchToProps)(ToDoView);