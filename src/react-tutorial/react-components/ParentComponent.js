import React, { Component } from 'react';
import ChildComponent from "./ChildComponent";
export default class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentText: "Text1",
            childText: "Text2"
        }
    }

    render() {

        return (
            <div style={{ width: "300px", padding: "10px", margin: "auto", backgroundColor: "lightblue" }}>
                <input defaultValue={this.state.currentText} onChange={(e) => this.setState({ currentText: e.target.value })} />
                <br /><br />
                <div>{this.state.currentText}</div>
                <br />
                <div>{this.state.childText}</div>

                <ChildComponent childDataCallback={(data) => this.setState({ childText: data })} parentText={this.state.currentText} />
            </div>
        );
    }
}