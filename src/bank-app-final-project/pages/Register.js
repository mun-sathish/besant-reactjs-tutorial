import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Form, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

class Register extends Component {
  state = {
    Username: "",
    Password: "",
    CPassword: "",
  };

  handleChange = (e) => {
    let evts = e.target.value;

    this.setState({ [e.target.name]: evts });
  };

  handleFormSubmit = (e) => {
    let actualData = this.fetchData();
    this.setState((state) => {
      actualData.push(this.state);
    });
    localStorage.setItem("document", JSON.stringify(actualData));
  };

  fetchData = () => {
    let localData = localStorage.getItem(document);
    if (localData) {
      return JSON.parse(localData) || [];
    }
    return [];
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
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            name="Username"
            value={this.state.Username}
            onChange={this.handleChange}
            placeholder="Enter Username"
          />
          <br />
          <br />
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="Password"
            name="Password"
            value={this.state.Password}
            onChange={this.handleChange}
            placeholder="Enter Password"
          />
          <br />
          <br />
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="Password"
            name="CPassword"
            value={this.state.CPassword}
            onChange={this.handleChange}
            placeholder="Enter Confirm Password"
          />
          <br />
          <br />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>

          <br />
          <br />
          <Link to="/Login">
            <p style={{ color: "blue" }}>If a Member? Sign In</p>
          </Link>
        </Form>
      </div>
    );
  }
}

export default Register;
