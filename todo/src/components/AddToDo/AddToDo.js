import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:''
        }
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
                    <button className="btn btn-danger btn-block" onClick={()=> this.onToDoAdd(this.state.todo)}>Add</button>
                </div>
            </div> );
    }

    onChange(td) {
      this.setState({
          todo : td.target.value
      })
    }

    onToDoAdd(todo) {
        this.props.onToDoAdd(todo);
        // this.setState({
        //     todo : ''
        // });
    }
}
 
export default AddToDo;
