import React, { Component } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

// function c(tag, msg) {
//     console.log(`[CLASS] [${tag}] Message: ${msg}`);
// }

export default class ReactClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sampleData: "defaultData",
            showComponent1: true,
        };
    }

    render() {
        return (
            <div>
                {this.state.showComponent1 ? (
                    <div>
                        <h1>Comp 1</h1>
                        <Comp1
                            changeComponent={() =>
                                this.setState({ showComponent1: false })
                            }
                        />
                    </div>
                ) : (
                    <div>
                        <h1>Comp 2</h1>
                        <Comp2
                            changeComponent={() =>
                                this.setState({ showComponent1: true })
                            }
                        />
                    </div>
                )}
            </div>
        );
    }
}
