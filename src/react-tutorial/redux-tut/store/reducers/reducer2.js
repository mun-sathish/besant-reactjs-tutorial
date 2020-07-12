
const initialState = [];

const reducer2Fn = (state = initialState, action) => {
    // action => type (required), payload
    switch (action.type) {
        case "R2-ADD":
            return [
                ...state,
                action.payload
            ]
        case "R2-POP":
            let tempState = state.slice();
            tempState = tempState.splice(0,1);
            return tempState;
        default:
            return state;
    }
}

export default reducer2Fn;