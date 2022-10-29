import React from "react";
import Square from "./Square";

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  // handleClick(i) {
  //   const squares = this.props.squares.slice();

  //   if (this.calculateWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   squares[i] = this.state.xIsNext ? 'X' : 'O';

  //   // if(this.state.xIsNext) {
  //   //   squares[i] = 'X';
  //   // }
  //   // else {
  //   //   squares[i] = 'O';
  //   // }
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = this.calculateWinner(this.props.squares);
    // let status;
    // if (winner) {
    //   status = winner + ' a gagné';
    // } else {
    //   status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
    // }

    return (
      <div>
        {/* <div className="status">{status}</div> */}
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
      </div>
    );
  }
}

export default Board;
