const DATA_FIELDS = {
    EMPLOYEE: "Employee",
};
// https://jsonplaceholder.typicode.com/posts
const BASE_URL = "	http://dummy.restapiexample.com/api/v1";
const URLs = {
    GET_ALL: BASE_URL + "/employees",
    GET_SINGLE: BASE_URL + "/employee/1",
    POST: BASE_URL + "/create",
    PUT: BASE_URL + "/update/21",
    DELELTE: BASE_URL + "/delete/1",
};

// const BASE_URL = "https://jsonplaceholder.typicode.com";
// const URLs = {
//     GET_ALL: BASE_URL + "/posts",
//     GET_SINGLE: BASE_URL + "/posts/1",
//     POST: BASE_URL + "/posts",
//     PUT: BASE_URL + "/posts/1",
//     DELELTE: BASE_URL + "/posts/1",
// };

export { DATA_FIELDS, URLs };
