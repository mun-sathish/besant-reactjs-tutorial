import React, { Component } from 'react';

export default class ChildComponent extends Component {

    constructor(props) {
        super(props);
        console.log("GoT Created!!!");
        this.state = {
            currentText: "Text2"
        }
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    componentWillReceiveProps(newProps) {
        // this.props => 
        // newProps => 
        console.log("componentWillReceiveProps");
        console.log("Old: ", this.props, ", New: ", newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(newProps, newState) {
        // this.state => 
        // newState => 
        console.log("componentWillUpdate");
        console.log("OldProps: ", this.props, ", NewProps: ", newProps);
        console.log("OldState: ", this.state, ", NewState: ", newState);
    }

    componentDidUpdate(prevProps, prevState) {
        // this.state => updated state
        // prevState => existing state
        console.log("componentDidUpdate");
        console.log("OldProps: ", prevProps, ", NewProps: ", this.props);
        console.log("OldState: ", prevState, ", NewState: ", this.state);
    }

    render() {
        console.log("render() CALLED !!!");
        return (
            <div style={{ width: "150px", padding: "10px", margin: "auto", backgroundColor: "lightgreen" }}>
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