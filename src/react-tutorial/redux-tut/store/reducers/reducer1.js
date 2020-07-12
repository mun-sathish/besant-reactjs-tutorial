
const initialState = {
    type: undefined,
    dataAvailable: false
};

const reducer1Fn = (state = initialState, action) => {
    // action => type (required), payload
    switch (action.type) {
        case "R1-CHANGE-TYPE":
            return {
                ...state,
                type: action.payload
            }
        case "R1-ENABLE-DATA":
            return {
                ...state,
                dataAvailable: true
            }
        case "R1-DISABLE-DATA":
            return {
                ...state,
                dataAvailable: false
            }
        default:
            return state;
    }
}

export default reducer1Fn;