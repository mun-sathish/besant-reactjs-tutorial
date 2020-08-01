import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { URIs, ROUTE_PATH } from "../configs";
import { message } from "antd";

export default function RegisterPage({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [cpasswordErr, setCPasswordErr] = useState("");
    const [registerErr, setRegisterErr] = useState("");

    const handleSubmit = (e) => {
        setRegisterErr("");
        e.preventDefault();
        if (
            usernameErr.length > 0 ||
            passwordErr.length > 0 ||
            cpasswordErr.length > 0 ||
            username.length == 0 ||
            password.length == 0
        ) {
            return;
        }
        Axios.post(URIs.ADD_USER, {
            username: username,
            password: password,
        }).then((response) => {
            const { data } = response;
            if (data.message === "SUCCESS") {
                message.info("User Registration is succesful");
                history.push(ROUTE_PATH.LOGIN);
            } else {
                setRegisterErr(data.message);
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

    const handleCPassword = (e) => {
        e.preventDefault();
        if (e.target.value !== password) {
            setCPasswordErr("Password Does not match");
        } else {
            setCPasswordErr("");
            setCPassword(e.target.value);
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
                <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    defaultValue={cpassword}
                    onChange={handleCPassword}
                />
                <br />
                <b style={{ color: "red" }}>{cpasswordErr}</b>
                <br />
                <br />
                <input type="submit" value="Register User" />
                <br />
                <b style={{ color: "red" }}>{registerErr}</b>
                <br />
                <br />
                <Link to="/login">
                    <p style={{ color: "blue" }}>Sign In</p>
                </Link>
            </form>
        </div>
    );
}
