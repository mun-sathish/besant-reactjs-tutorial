import { ISampleReducer, IAction } from "./type/interface";

export const getEllipsedText = (inputText: string, limit: number): string => {
  let strCount: number = inputText.length;
  if (strCount > limit) {
    let tempString: string = inputText.slice(0, strCount - limit);
    return tempString + "...";
  } else {
    return inputText;
  }
};

function generatePromise(countdown: number): Promise<any> {
  return Promise.resolve("Success");
  //   setTimeout(() => {
  //     return Promise.resolve("Success");
  //   }, countdown);
}

// generatePromise(123).then((res) => console.log(res));

const initialState: ISampleReducer = {
  data1: undefined,
  data2: [],
};

export const sampleReducer = (
  state: ISampleReducer = initialState,
  action: IAction
): ISampleReducer => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        data2: [12, 32],
      };
    default:
      return state;
  }
};

export { generatePromise };
