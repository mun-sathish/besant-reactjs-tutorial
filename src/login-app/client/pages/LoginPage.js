import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
    URIs,
    STORAGE_IS_LOGGED_IN,
    ROUTE_PATH,
    STORAGE_USER_DATA,
} from "../configs";

export default function LoginPage({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [loginErr, setLoginErr] = useState("");

    const handleSubmit = (e) => {
        setLoginErr("");
        e.preventDefault();
        if (
            usernameErr.length > 0 ||
            passwordErr.length > 0 ||
            username.length == 0 ||
            password.length == 0
        ) {
            return;
        }
        Axios.get(
            URIs.LOGIN + "?username=" + username + "&password=" + password
        ).then((response) => {
            const { data } = response;
            if (data.message === "SUCCESS") {
                localStorage.setItem(STORAGE_IS_LOGGED_IN, "true");
                localStorage.setItem(
                    STORAGE_USER_DATA,
                    JSON.stringify({ username, token: data.token })
                );
                history.push(ROUTE_PATH.DASHBOARD);
            } else {
                setLoginErr(data.message);
            }
        });
    };

    const handleUsername = (e) => {
        e.preventDefault();
        if (e.target.value.length > 10) {
            setUsernameErr("Enter a valid Username");
        } else {
            setUsernameErr("");
            setUsername(e.target.value);
        }
    };

    const handlePassword = (e) => {
        e.preventDefault();
        var passRegex = /^[A-Za-z]\w{7,14}$/;
        if (!e.target.value.match(passRegex)) {
            setPasswordErr("Enter a valid Password");
        } else {
            setPasswordErr("");
            setPassword(e.target.value);
        }
    };

    return (
        <div>
            <form style={{ padding: "10px" }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    defaultValue={username}
                    onChange={handleUsername}
                />
                <br />
                <b style={{ color: "red" }}>{usernameErr}</b>
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    defaultValue={password}
                    onChange={handlePassword}
                />
                <br />
                <b style={{ color: "red" }}>{passwordErr}</b>
                <br />
                <br />
                <input type="submit" value="Login" />
                <br />
                <b style={{ color: "red" }}>{loginErr}</b>
                <br />
                <br />
                <Link to="/register">
                    <p style={{ color: "blue" }}>New User? Register a User</p>
                </Link>
            </form>
        </div>
    );
}
