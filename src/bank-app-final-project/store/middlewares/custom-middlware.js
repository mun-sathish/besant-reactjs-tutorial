import { ACTION_KEY } from "../../config";
import {
    fetchUsersData,
    fetchLoggedInUserData,
    setLoggedInUserData,
    setUsersData,
} from "../../util";

function customLogger({ getState }) {
    return (next) => (action) => {
        // code some stuff here
        console.log("Before Reducer Execution", getState());

        const { localStorageCall, type, payload = {} } = action;

        if (localStorageCall) {
            switch (type) {
                case ACTION_KEY.POST_DEPOSIT:
                    let loggedInUserData = fetchLoggedInUserData();
                    let updatedLoggedInUserData = loggedInUserData;
                    // console.log("LoggedIN", loggedInUserData);
                    let updatedUsersData = fetchUsersData().map((item) => {
                        if (item.username === loggedInUserData.username) {
                            let tempObj = {
                                ...item,
                                walletBalance:
                                    Number(payload.depositNumber) +
                                    Number(item.walletBalance),
                            };
                            updatedLoggedInUserData = tempObj;
                            return tempObj;
                        } else return item;
                    });

                    setLoggedInUserData(updatedLoggedInUserData);
                    setUsersData(updatedUsersData);
                    next(action);
                    break;

                default:
                    break;
            }
        } else {
            next(action);
        }
    };
}

// const store => next => action => {

// }

export default customLogger;
