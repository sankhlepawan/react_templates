import React, { Component } from 'react'
import {Square} from '../../components'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true,
            winner:''
        }
    }

    isAllX(in1,in2,in3,squares){
        let a = (squares[in1] !== undefined && squares[in1] !== null ? squares[in1] : "");
        let b = (squares[in2] !== undefined && squares[in2] !== null ? squares[in2] : "");
        let c = (squares[in3] !== undefined && squares[in3] !== null ? squares[in3] : "");
        return (a.indexOf("X") !== -1 && b.indexOf("X") !== -1 && c.indexOf("X") !== -1);


    }

    isAllO(in1,in2,in3,squares){
        let a = (squares[in1] !== undefined && squares[in1] !== null ? squares[in1] : "");
        let b = (squares[in2] !== undefined && squares[in2] !== null ? squares[in2] : "");
        let c = (squares[in3] !== undefined && squares[in3] !== null ? squares[in3] : "");
        return (a.indexOf("O") !== -1 && b.indexOf("O") !== -1 && c.indexOf("O") !== -1);


    }

    checkWinner(squares){
       if(this.isAllX(0,1,2,squares)){
           return 'X';
       }else if(this.isAllO(0,1,2,squares)){
            return 'O';
       }if(this.isAllX(3,4,5,squares)){
        return 'X';
       }else if(this.isAllO(3,4,5,squares)){
            return 'O';
       }if(this.isAllX(6,7,8,squares)){
        return 'X';
       }else if(this.isAllO(6,7,8,squares)){
            return 'O';
       }if(this.isAllX(0,3,6,squares)){
        return 'X';
       }else if(this.isAllO(0,3,6,squares)){
            return 'O';
       }if(this.isAllX(1,4,7,squares)){
        return 'X';
       }else if(this.isAllO(1,4,7,squares)){
            return 'O';
       }if(this.isAllX(2,5,8,squares)){
        return 'X';
       }else if(this.isAllO(2,5,8,squares)){
            return 'O';
       }if(this.isAllX(0,4,8,squares)){
        return 'X';
       }else if(this.isAllO(0,4,8,squares)){
            return 'O';
       }if(this.isAllX(2,4,6,squares)){
        return 'X';
       }else if(this.isAllO(2,4,6,squares)){
            return 'O';
       }else{
           return "?";
       }
       
    }
    
    handleClick(i) {
        let squares = this.state.squares.slice()
        if(squares[i]) {
            return 
        }
        squares[i] = this.state.xTurn ? 'X' : 'O'
        
        this.setState({
            squares: squares,
            xTurn: !this.state.xTurn
        })
       let win = this.checkWinner(squares);
       if(win){
        this.setState({winner : win});
       }
    }

    resetBoard() {
        let squares1 = Array(9).fill(null)
        this.setState(
            {
            squares: squares1,
        })
    }

    renderSquare = (i) => (
        <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
        />
    )

    render(){
        return(
            <div>
                <h2>
                    Turn: {this.state.xTurn ? 'X' : '0'}
                </h2>
                <h2>
                    Winner is: {this.state.winner ? this.state.winner : '?'}
                </h2>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
        
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div>
                 <button className="btn-reset" onClick={() => this.resetBoard()}>Reset</button>
                </div>
            </div>
            
        )
    }
}

export default Board