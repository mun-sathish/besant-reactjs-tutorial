import React, { Component } from "react";
import AxiosConfig from "./configurations";
import axios from "axios";
import UserTile from "./components";
import { Row, Col } from "antd";

export default class AxiosExample extends Component {
    state = {
        getData: {
            [AxiosConfig.DATA_FIELDS.EMPLOYEE]: undefined,
            [AxiosConfig.DATA_FIELDS.EMPLOYEE + "error"]: undefined,
        },
        postData: {
            [AxiosConfig.DATA_FIELDS.EMPLOYEE]: undefined,
        },
        putData: {
            [AxiosConfig.DATA_FIELDS.EMPLOYEE]: undefined,
        },
        deleteData: {
            [AxiosConfig.DATA_FIELDS.EMPLOYEE]: undefined,
        },
    };

    performGetCall = () => {
        axios.get(AxiosConfig.URLs.GET_ALL).then((response) =>
            this.setState({
                getData: {
                    ...this.state.getData,
                    [AxiosConfig.DATA_FIELDS.EMPLOYEE]: response.data.data,
                },
            })
        );
    };

    performPostCall = () => {
        axios.post(AxiosConfig.URLs.POST).then((response) =>
            this.setState({
                postData: {
                    ...this.state.postData,
                    [AxiosConfig.DATA_FIELDS.EMPLOYEE]: response.data,
                },
            })
        );
    };

    performPutCall = () => {
        axios.put(AxiosConfig.URLs.PUT).then((response) =>
            this.setState({
                putData: {
                    ...this.state.putData,
                    [AxiosConfig.DATA_FIELDS.EMPLOYEE]: response.data,
                },
            })
        );
    };

    performDeleteCall = () => {
        axios.delete(AxiosConfig.URLs.DELELTE).then((response) =>
            this.setState({
                deleteData: {
                    ...this.state.deleteData,
                    [AxiosConfig.DATA_FIELDS.EMPLOYEE]: response.data,
                },
            })
        );
    };

    sampleMethod = () => {
        let obj1 = {
            data1: "data1",
            data2: "data2",
            data3: "data3",
        };

        console.log(obj1);

        let newObj = {
            ...obj1,
            data3: "changed Data",
        };

        console.log("New Obj", newObj);

        let arrObj = undefined;
        arrObj.map((item) => console.log(item));
    };

    componentWillMount() {
        this.sampleMethod();
        // CORS -
        this.performGetCall();
        this.performPostCall();
        this.performPutCall();
        this.performDeleteCall();
    }

    render() {
        let DisplayTiles = (
            this.state.getData[AxiosConfig.DATA_FIELDS.EMPLOYEE] || []
        ).map((item) => {
            return (
                <Col span={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
                    <UserTile employeeData={item} />
                </Col>
            );
        });

        return (
            <div>
                <Row>{DisplayTiles}</Row>
                <div id="getData">
                    <h1>GET DATA</h1>
                    <p>
                        {AxiosConfig.DATA_FIELDS.EMPLOYEE} Data:{" "}
                        {JSON.stringify(
                            this.state.getData[
                                [AxiosConfig.DATA_FIELDS.EMPLOYEE]
                            ]
                        )}
                    </p>
                </div>

                <div id="postData">
                    <h1>POST DATA</h1>
                    <p>
                        {AxiosConfig.DATA_FIELDS.EMPLOYEE} Data:{" "}
                        {JSON.stringify(
                            this.state.postData[
                                [AxiosConfig.DATA_FIELDS.EMPLOYEE]
                            ]
                        )}
                    </p>
                </div>

                <div id="putData">
                    <h1>PUT DATA</h1>
                    <p>
                        {AxiosConfig.DATA_FIELDS.EMPLOYEE} Data:{" "}
                        {JSON.stringify(
                            this.state.putData[
                                [AxiosConfig.DATA_FIELDS.EMPLOYEE]
                            ]
                        )}
                    </p>
                </div>

                <div id="deleteData">
                    <h1>DELETE DATA</h1>
                    <p>
                        {AxiosConfig.DATA_FIELDS.EMPLOYEE} Data:{" "}
                        {JSON.stringify(
                            this.state.deleteData[
                                [AxiosConfig.DATA_FIELDS.EMPLOYEE]
                            ]
                        )}
                    </p>
                </div>
            </div>
        );
    }
}
