import React, { Component } from "react";

function c(tag, msg) {
    console.log(`[CLASS-C1] [${tag}] Message: ${msg}`);
}

export default class Comp1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleData: "defaultData",
        };
    }

    componentDidMount() {
        c("didMount", "Executing");
    }

    componentDidUpdate() {
        c("didUpdate", "Executing");
    }

    componentWillUnmount() {
        c("willUnMount", "Executing");
    }

    render() {
        return (
            <div>
                SampleData: {this.state.sampleData}
                <br />
                <button
                    onClick={() =>
                        this.setState({ sampleData: new Date().getTime() })
                    }
                >
                    Change Sample Data
                </button>
                <button onClick={this.props.changeComponent}>Goto Comp2</button>
            </div>
        );
    }
}
