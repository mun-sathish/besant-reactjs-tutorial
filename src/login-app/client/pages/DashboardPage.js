import React, { Component } from "react";
import {
    STORAGE_IS_LOGGED_IN,
    ROUTE_PATH,
    URIs,
    STORAGE_USER_DATA,
} from "../configs";
import Axios from "axios";

export default class DashboardPage extends Component {
    constructor(props) {
        super(props);

        let data = localStorage.getItem(STORAGE_IS_LOGGED_IN);
        if (!data || data !== "true") {
            this.props.history.replace(ROUTE_PATH.LOGIN);
        }

        this.state = {
            isLoggedIn: !(!data || data !== "true"),
            dashboardData: [],
        };
    }

    componentDidMount() {
        if (!this.state.isLoggedIn) return;
        let userData = JSON.parse(localStorage.getItem(STORAGE_USER_DATA));
        Axios.get(
            URIs.DASHBOARD +
                "?username=" +
                userData.username +
                "&token=" +
                userData.token
        ).then((response) => {
            this.setState({ dashboardData: response.data });
        });
    }

    handleLogout = () => {
        let userData = JSON.parse(localStorage.getItem(STORAGE_USER_DATA));
        Axios.get(URIs.LOGOUT + "?username=" + userData.username).then(
            (response) => {
                localStorage.removeItem(STORAGE_IS_LOGGED_IN);
                localStorage.removeItem(STORAGE_USER_DATA);
                this.props.history.push(ROUTE_PATH.LOGIN);
            }
        );
    };

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}>Logout</button>
                {JSON.stringify(this.state.dashboardData)}
            </div>
        );
    }
}
