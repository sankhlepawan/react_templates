import React, { Component } from 'react';

class CalButton extends Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        return ( 
            <div className="col-sm-3">
                <button className="btn btn-success btn-block" onClick={() => this.props.onClick(this.props.optType)}>{this.props.optType}</button>
            </div>
            
         );
    }
}
 
export default CalButton;