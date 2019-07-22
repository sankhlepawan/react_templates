import React, { Component } from 'react';
import { addTodoAction } from '../actions/actions';
import { connect } from 'react-redux';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:''
        }
    }

    dispatchAddButtonAction(ev) {
        this.props.addToDo(this.state.todo);
        this.setState({todo:''});
        
        
    }

    onChange(ev) {
        let value = ev.target.value;
        this.setState({todo:value});
    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-sm-9">
                    <div className="form-group">
                        <input value={this.state.todo} className="form-control"  placeholder="add Todo..." onChange={(ev) => this.onChange(ev)}></input>
                    </div>
                </div>
                <div className="col-sm-3">
                    <button className="btn btn-danger btn-block" onClick={(e)=> this.dispatchAddButtonAction(e)}>Add</button>
                </div>
            </div> 
         );
    }
}
 

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (tech) => dispatch(addTodoAction(tech))
    }
  }

export default connect(null,mapDispatchToProps)(AddToDo);