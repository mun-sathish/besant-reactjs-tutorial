export const fetchUsersData = () => {
    let localData = localStorage.getItem("users");
    if (localData) {
        return JSON.parse(localData) || [];
    }
    return [];
};

//  { username, password, walletBalance }
export const fetchLoggedInUserData = () => {
    let localData = localStorage.getItem("loggedInUser");
    if (localData) {
        return JSON.parse(localData) || undefined;
    }
    return undefined;
};

export const setLoggedInUserData = (data) => {
    localStorage.setItem("loggedInUser", JSON.stringify(data));
};

export const setUsersData = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
};

// { id, userId, description }
export const fetchTransactions = () => {
    let localData = localStorage.getItem("transactions");
    if (localData) {
        return JSON.parse(localData) || [];
    }
    return [];
};
