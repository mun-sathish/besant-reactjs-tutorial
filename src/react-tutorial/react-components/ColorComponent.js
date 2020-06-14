import React, { Component } from 'react';

export default class ColorComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentColor: "green"
        }
    }

    changeColor = (color) => {
        // this.state.currentColor = color; SHOULD NOT DO LIKE THIS
        this.setState({ currentColor: color });
    }

    render() {
        let buttonStyle = {
            padding: "10px",
            margin: "10px"
        }

        return (
            <div>
                <div style={{ width: "300px", height: "100px", backgroundColor: this.state.currentColor }}></div>

                <button style={buttonStyle} onClick={() => this.changeColor("blue")} >Blue</button>
                <button style={buttonStyle} onClick={() => this.changeColor("green")} >Green</button>
                <button style={buttonStyle} onClick={() => this.changeColor("yellow")} >Yellow</button>
            </div>
        );
    }
}