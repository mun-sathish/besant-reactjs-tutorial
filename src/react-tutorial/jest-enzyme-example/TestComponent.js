import React, { Component } from "react";

export default class TestComponent extends Component {
    render() {
        return (
            <div>
                <h1>Test Component 2</h1>
                <button onClick={this.props.onBtnClicked}>Test Btn</button>
                <p>Prop Text is {this.props.propText}</p>
                <div>
                    <select>
                        <option value="hi1">Option 1</option>
                        <option value="hi2">Option 2</option>
                        <option value="hi3">Option 3</option>
                        <option value="hi4">Option 4</option>
                        <option value="hi5">Option 5</option>
                    </select>
                </div>
            </div>
        );
    }
}
