export const someFn = (someData) => {
    return "Hi Something" + someData;
};

export const anotherFn = (tag, a, b) => {
    if (tag === "SUM") {
        return a + b;
    } else if (tag === "MIN") {
        return a - b;
    } else if (tag === "MUL") {
        return a * b;
    } else if (tag === "DIV") {
        return a / b;
    } else {
        return -1;
    }
};

export const createObj = (data) => {
    return {
        type: "ADD",
        payload: data,
    };
};
