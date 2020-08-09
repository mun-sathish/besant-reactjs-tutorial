import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
// import "./index.css";
import { ROUTE_PATH } from "./config";
import AccountInfo from "./pages/AccountInfo";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import store from "./store";

function App() {
    // let obj = [
    //     {
    //         username: "sathish",
    //         password: "sathish",
    //         walletBalance: 0,
    //     },
    // ];
    // localStorage.setItem("users", JSON.stringify(obj));
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Route
                        exact
                        path={ROUTE_PATH.DEFAULT}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={ROUTE_PATH.DASHBOARD}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={ROUTE_PATH.DEPOSIT}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={ROUTE_PATH.WITHDRAWAL}
                        component={Dashboard}
                    />
                    <Route path={ROUTE_PATH.LOGIN} component={Login} />
                    <Route path={ROUTE_PATH.REGISTER} component={Register} />
                    <Route
                        path={ROUTE_PATH.ACCOUNTINFO}
                        component={AccountInfo}
                    />
                </Router>
            </div>
        </Provider>
    );
}

export default App;
