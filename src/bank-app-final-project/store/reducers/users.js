import { fetchUsersData } from "../../util";

const initialState = fetchUsersData();

const users = (state = initialState, action) => {
    // action => type (required), payload
    switch (action.type) {
        default:
            return state;
    }
};

export default users;
