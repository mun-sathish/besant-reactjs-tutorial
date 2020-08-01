import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ROUTE_PATH, STORAGE_IS_LOGGED_IN, STORAGE_USER_DATA } from "./configs";

export default function LoginApp() {
    // localStorage.removeItem(STORAGE_IS_LOGGED_IN);
    // localStorage.removeItem(STORAGE_USER_DATA);

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ROUTE_PATH.DEFAULT}
                    component={DashboardPage}
                />
                <Route
                    exact
                    path={ROUTE_PATH.DASHBOARD}
                    component={DashboardPage}
                />
                <Route exact path={ROUTE_PATH.LOGIN} component={LoginPage} />
                <Route
                    exact
                    path={ROUTE_PATH.REGISTER}
                    component={RegisterPage}
                />
            </Switch>
        </Router>
    );
}
