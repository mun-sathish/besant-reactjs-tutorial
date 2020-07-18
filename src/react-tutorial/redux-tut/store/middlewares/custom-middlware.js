function customLogger({ getState }) {
    return (next) => (action) => {
        // code some stuff here
        console.log("Before Reducer Execution", getState());

        const { apiCall } = action;
        if (apiCall) {
            console.log("I am going to perform API Operation");
            fetch("http://dummy.restapiexample.com/api/v1/employees")
                .then((json) => json.json())
                .then((response) => {
                    next({ ...action, payload: response.data[0].id });
                });
        } else {
            let data = next(action);

            // code some stuff here
            console.log("After Reducer Execution", getState());

            return data;
        }
    };
}

// const store => next => action => {

// }

export default customLogger;
