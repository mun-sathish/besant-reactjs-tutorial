import React from "react";
import TodoApp from "./todo-app";
import RouterApp from "./react-tutorial/router-example";
import { Provider } from "react-redux";
import store from "./react-tutorial/redux-tut/store";

function App() {
    return (
        <Provider store={store}>
            <RouterApp />
        </Provider>
    );
}

export default App;
