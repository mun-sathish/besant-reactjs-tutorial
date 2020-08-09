import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputData: undefined,
        };
        localStorage.removeItem("sampleData");
    }

    componentDidMount() {
        console.log(`did mount executing`);
    }

    componentDidUpdate() {
        console.log("State is updated");
    }

    componentWillUnmount() {}

    handleAddData = () => {
        if (this.state.inputData) {
            let actualData = this.fetchData();
            actualData.push(this.state.inputData);
            console.log(actualData);
            localStorage.setItem("sampleData", JSON.stringify(actualData));
            this.setState({ inputData: undefined });
        }
    };

    fetchData = () => {
        let localData = localStorage.getItem("sampleData");
        if (localData) {
            return JSON.parse(localData) || [];
        }
        return [];
    };

    render() {
        const ViewSampleData = this.fetchData().map((item) => (
            <h3 key={item}>{item}</h3>
        ));
        return (
            <div>
                <input
                    value={this.state.inputData}
                    onChange={(e) =>
                        this.setState({ inputData: e.target.value })
                    }
                />
                <button onClick={this.handleAddData}>Add Data</button>
                <div>
                    <h1>Local Storage Data</h1>
                    {ViewSampleData}
                </div>
            </div>
        );
    }
}
