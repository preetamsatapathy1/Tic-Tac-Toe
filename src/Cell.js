import React from 'react';
import './cell.css'

class Cell extends React.Component{
    render(){
        return (
            <div>
                <div className="cell" id={this.props.id}>
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default Cell