import React, { Component } from 'react';
import './Calculator.css';
import { InputText, CalButton, Footer }  from './components';

class Calculator extends Component {
  
  opts = ["Add","Subtract","Divide","Multiply"]
  constructor(props){
    super(props)
    this.state = {
      val1:'',
      val2:'',
      result:''
    }
    
  }
  
  calculate(op) {
    let result = 0;
  switch(op) {
    case "Add":
      result = +(this.state.val2) + (+this.state.val1);
      break;
    case "Subtract":
      result = (+this.state.val2) - (+this.state.val1);
      break;
    case "Divide":
      result = (+this.state.val2) / (+this.state.val1);
      break;
    case "Multiply":
      result = (+this.state.val2) * (+this.state.val1);
      break;
   }

   this.setState({
    result : result
   });
  }

  setButtons() {
    let result = [];
    this.opts.forEach(opt => {
      result.push(<CalButton key={opt.toString()} optType={opt} onClick={() => this.calculate(opt)}></CalButton>);
    });
    return result;
  }

  getInput() {
    let btn = [];
    btn.push(<InputText val={this.state.val1} key={1} onBlur={(ev) => this.onInput1Change(ev)}></InputText>)
    btn.push(<InputText val={this.state.val2} key={2} onBlur={(ev) => this.onInput2Change(ev)}></InputText>)
    return btn;
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <center><h1>Simple Calculator</h1></center>
          <br></br>
          <div className="row">
           {this.getInput()}
          </div>
          <div className="row">
           {this.setButtons()}
          </div>
          <br/>
          <Footer onReset={()=> this.reset()} result={this.state.result}></Footer>
        </div>
      </div>
    );
  }

  reset() {
    this.setState({
      val1 : '',
      val2: ''
    });
  }
  
  onInput1Change(ev) {
    this.setState({
      val1 : ev.target.value
    });
   
  }

  onInput2Change(ev) {
    this.setState({
      val2 : ev.target.value
    });
  }
}

export default Calculator;
