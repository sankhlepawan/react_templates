import React, { Component } from 'react';

class InputText extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            val: this.props.val
        }
    }
    
    render() { 
        return ( 
            <div className="form-group col-md-6">
                <input value={this.props.val} type="number" className="form-control"  placeholder="NUMBER e.g. 1337" onChange={this.props.onBlur}></input>
            </div>
        );
    }
}
 
export default InputText;