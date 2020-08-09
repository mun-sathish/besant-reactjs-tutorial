import { Breadcrumb, Layout, Menu } from "antd";
import React, { Component } from "react";
// import { AccountBookOutlined, BankOutlined } from "@ant-design/icons";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { ROUTE_PATH } from "../config";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import { fetchLoggedInUserData } from "../util";
const { Header, Content, Footer } = Layout;

class Dashboard extends Component {
    rootSubmenuKeys = ["sub1", "sub2", "sub4"];

    state = {
        openKeys: ["sub1"],
    };

    constructor(props) {
        super(props);

        if (!fetchLoggedInUserData()) {
            this.props.history.replace(ROUTE_PATH.LOGIN);
        }
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                        >
                            <Menu.Item key="1">
                                <Link to={ROUTE_PATH.DEPOSIT}>Deposit</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={ROUTE_PATH.WITHDRAWAL}>
                                    Withdrawal
                                </Link>
                            </Menu.Item>
                            {/* <Menu.Item key="3"><Link to={ROUTE_PATH.DEPOSIT}>Deposit</Link></Menu.Item> */}
                        </Menu>
                    </Header>
                    <Content style={{ padding: "0 50px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
                            <Route
                                exact
                                path={ROUTE_PATH.DEFAULT}
                                component={Deposit}
                            />
                            <Route
                                exact
                                path={ROUTE_PATH.DASHBOARD}
                                component={Deposit}
                            />
                            <Route
                                exact
                                path={ROUTE_PATH.DEPOSIT}
                                component={Deposit}
                            />
                            <Route
                                exact
                                path={ROUTE_PATH.WITHDRAWAL}
                                component={Withdrawal}
                            />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default Dashboard;
