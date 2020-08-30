import React from "react";

interface IState {
  localData1: string;
  localData2: number;
  localData3: boolean;
}

interface IProps {
  input1: string;
  input2: boolean;
  input3?: number;
}

export class ClasComponent extends React.Component<IProps, IState> {
  state = {
    localData1: "string",
    localData2: 123,
    localData3: false,
  };

  render() {
    return (
      <div>
        <div>
          Local Data:{" "}
          {`${this.state.localData1} - ${this.state.localData2} - ${this.state.localData3}`}
        </div>

        <div>
          Input Data:{" "}
          {`${this.props.input1} - ${this.props.input2} - ${this.props.input3}`}
        </div>
      </div>
    );
  }
}
