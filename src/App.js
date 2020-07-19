import React from "react";
// import TodoApp from "./todo-app";
// import RouterApp from "./react-tutorial/router-example";
import AxiosApp from "./react-tutorial/axios-example";
import { Provider } from "react-redux";
import store from "./react-tutorial/redux-tut/store";

function App() {
    return (
        <Provider store={store}>
            <AxiosApp />
        </Provider>
    );
}

export default App;
