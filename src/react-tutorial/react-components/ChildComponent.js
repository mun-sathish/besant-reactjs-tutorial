import React, { Component } from 'react';

export default class ChildComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentText: "Text2"
        }
    }

    render() {
        return (
            <div style={{ width: "150px", padding: "10px", margin:"auto", backgroundColor: "lightgreen"}}>
                <input defaultValue={this.state.currentText} onChange={(e) => {
                    this.setState({ currentText: e.target.value });
                    this.props.childDataCallback(e.target.value);
                }} />
                <br /><br />
                <div>{this.props.parentText}</div>
                <br />
                <div>{this.state.currentText}</div>
            </div>
        );
    }
}