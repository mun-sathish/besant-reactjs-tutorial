import React, { Component } from "react";

function c(tag, msg) {
    console.log(`[CLASS-C1] [${tag}] Message: ${msg}`);
}

export default class Comp1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleData: "defaultData",
            inputData: undefined,
        };

        this.myRef = React.createRef();
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
                <input id="hi" ref={this.myRef} />
                <button
                    onClick={() => {
                        this.setState({
                            sampleData: new Date().getTime(),
                            inputData: this.myRef.current.value,
                        });
                        // this.myRef.current.focus();
                    }}
                >
                    Change Sample Data
                </button>
                <button onClick={this.props.changeComponent}>Goto Comp2</button>
                <p>Input Data: {this.state.inputData}</p>
            </div>
        );
    }
}
