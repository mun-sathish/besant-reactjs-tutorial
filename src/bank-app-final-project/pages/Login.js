import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ROUTE_PATH } from "../config";
import { fetchUsersData, setLoggedInUserData } from "../util";

class Login extends Component {
    state = {
        Username: "",
        Passsword: "",
        CPassword: "",
        UsernameErr: "",
        PasswordErr: "",
        loginErr: "",
    };

    handleUsername = (e) => {
        this.setState({ Username: e.target.value });
        // let Data = this.fetchData();
        // if (e.target.value !== Data.Username) {
        //   this.setState({ UsernameErr: "Not a Valid User" });
        // } else {
        //   this.setState({ UsernameErr: "" });
        //   this.setState({ Username: e.target.value });
        // }
    };

    handlePassword = (e) => {
        this.setState({ Passsword: e.target.value });
    };

    handleFormSubmit = (e) => {
        let found = undefined;
        fetchUsersData().forEach((item) => {
            if (
                item.username === this.state.Username &&
                item.password === this.state.Passsword
            ) {
                found = item;
            }
        });
        if (found) {
            setLoggedInUserData(found);
            this.props.history.replace(ROUTE_PATH.DASHBOARD);
        } else {
            this.setState({ loginErr: "Invalid Username/Password" });
        }
        // let Data = this.fetchData();
        // if (Data === e.target.value) {
        //   this.setState({
        //     Username: this.Data.Username,
        //     Passsword: this.Data.Passsword,
        //     CPassword: this.Data.CPasssword,
        //   });
        // } else {
        //   alert("Not a Valid user");
    };

    render() {
        return (
            <div
                style={{
                    borderRadius: "10px",
                    backgroundColor: "lightblue",
                    paddingLeft: "500px",
                    paddingTop: "160px",
                    height: "620px",
                    border: "3px solid blue",
                }}
            >
                <Form className="login-form" onFinish={this.handleFormSubmit}>
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        type="text"
                        name="Username"
                        value={this.state.Username}
                        onChange={this.handleUsername}
                        placeholder="Enter Username"
                    />
                    <br />
                    {/* <b style={{ color: "red" }}>{this.state.UsernameErr}</b> */}
                    <br />
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="Password"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.handlePassword}
                        placeholder="Enter Password"
                    />
                    <br />
                    <br />
                    {/* <label>
            <button type="submit">Sign In</button>
          </label> */}
                    <label>
                        <input type="submit" value="Sign In" />
                        <b style={{ color: "red" }}>
                            &nbsp; {this.state.loginErr}
                        </b>
                    </label>

                    <br />
                    <br />
                    <Link to="/Register">
                        <p style={{ color: "blue" }}>Not a Member? Register</p>
                    </Link>
                </Form>
            </div>
        );
    }
}

export default Login;
