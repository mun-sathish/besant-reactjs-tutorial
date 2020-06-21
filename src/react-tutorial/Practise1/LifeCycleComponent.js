import React, { Component } from "react";

export default class LifeCycleComponent extends Component {

    constructor(props) {
        super(props);
        console.log("GoT Created!!!");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(newProps) {
        // this.props => 
        // newProps => 
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return false;
    }

    componentWillUpdate(newProps, newState) {
        // this.state => 
        // newState => 
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        // this.state => updated state
        // prevState => existing state
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render() CALLED !!!");
        return (
            <div>LifeCycleComponent</div>
        );
    }
}