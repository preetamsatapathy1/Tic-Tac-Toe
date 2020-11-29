import React from 'react';
import Cell from './Cell';
import './grid.css';

class Grid extends React.Component{

    state = {
        player1 : true,
    }
       
    handleClick = e =>{
        let output = this.state.player1 ? "x" : "O"
        let index = parseInt(e.target.id)
        if(this.props.input[index] != null){
            return
        }
        const{handleInput} = this.props
        handleInput(output,index)
        this.setState({
            player1 : !this.state.player1
        })
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                <div className="row">
                    <Cell value={this.props.input[0]} id="0" />
                    <Cell value={this.props.input[1]} id="1"/>
                    <Cell value={this.props.input[2]} id="2"/>
                </div>
                <div className="row">
                    <Cell value={this.props.input[3]} id="3"/>
                    <Cell value={this.props.input[4]} id="4"/>
                    <Cell value={this.props.input[5]} id="5"/>
                </div>
                <div className="row">
                    <Cell value={this.props.input[6]} id="6"/>
                    <Cell value={this.props.input[7]} id="7"/>
                    <Cell value={this.props.input[8]} id="8"/>
                </div>
            </div>
        )
    }
}

export default Grid