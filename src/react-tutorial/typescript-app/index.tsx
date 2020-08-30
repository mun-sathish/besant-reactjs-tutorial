import React from "react";
import { ClasComponent } from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { ISampleReducer } from "./type/interface";

const TypescriptApp = () => {
  let sampleData: ISampleReducer = {
    data1: undefined,
    data2: [1, 23],
  };

  return (
    <div>
      <ClasComponent input1={"String"} input2></ClasComponent>
      <FunctionComponent newData={"string"} oldData={sampleData} />
    </div>
  );
};

export default TypescriptApp;
