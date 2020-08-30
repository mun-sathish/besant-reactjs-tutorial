import React, { useState } from "react";
import { ISampleReducer } from "./type/interface";

interface ITableData2 {}

interface IProps {
  newData: string;
  oldData: ISampleReducer;
}

interface IState {
  localData1: string;
  localData2: number;
}

const FunctionComponent: React.FC<IProps> = (props) => {
  const [someData] = useState<IState>({
    localData1: "someData",
    localData2: 123,
  });

  return (
    <div>
      {/* <Table data1={123} data2={} /> */}
      <div>Data: {JSON.stringify(props.oldData.data1)}</div>
      <div>LocalData: {JSON.stringify(someData)}</div>
    </div>
  );
};

export default FunctionComponent;
