import React from "react";
import Grid from "./Grid";
import './App.css'

class App extends React.Component {
  state = {
    input: [null, null, null, null, null, null, null, null, null],
    nextPlayer : "X",
    winner :false
  };

  handleInput = (output, index) => {
    if(this.state.winner == true){
      return
    }
    
    let arr = this.state.input;
    arr[index] = output;
    this.setState(
      {
        input: arr,
      },
      () => this.findWinner(output)
    );
  };

  findWinner = (output) => {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      let combination = win[i];
      if (this.state.input[combination[0]] === this.state.input[combination[1]] &&
          this.state.input[combination[1]] === this.state.input[combination[2]] &&
          this.state.input[combination[0]] != null ) {
          if(this.state.input[combination[0]] === "X"){
            alert ("Winner is Player 1")
          }
          else{
            alert("Winner is Player 2")
          }
          this.setState({
            winner : true,
            nextPlayer : this.state.input[combination[0]]
          })
          return
      }
      else{
        
        let nextPlayer = ""
        if (output === "X"){
          nextPlayer = "O"
        }
        else{
          nextPlayer = "X"
        }
        this.setState({
          nextPlayer:nextPlayer
        },() => console.log(this.state.nextPlayer))
      }
    }
  };

  render() {
    return (
      <div className='game'>
        {
          this.state.winner ? <p>Winner : {this.state.nextPlayer} </p> : 
                            <p>Next Player : {this.state.nextPlayer}</p>

        }
        <Grid input={this.state.input} handleInput={this.handleInput} />

      </div>
    )
    
  }
}

export default App;
