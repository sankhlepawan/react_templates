import React, { Component } from 'react';

class Footer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            result : this.props.result
        }
    }


    componentWillReceiveProps(newProps) {
        const oldProps = this.props
        if(oldProps.result !== newProps.result) {
            this.setState({
                result: newProps.result
            });
        }
    }

    render() { 
        return ( 
        <div className="row">
            <div className="col-sm-3"><button className="btn btn-danger btn-block" onClick={()=> this.reset()}>Reset</button></div>
            <div className="col-sm-9">
                <div className="form-group">
                    <input value={this.state.result} className="form-control"  placeholder="Result..." readOnly></input>
                </div>
            </div>
        </div>
     );
    }

    reset() {
      this.setState({
          result:''
      });
      this.props.onReset();
    }
}
 
export default Footer;