import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { Row, Col } from "antd";

export default class MasterContainer extends Component {
    /*
     { id, text, isTaskCompleted }
    */
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    render() {
        return (
            <Row>
                <Col span={12}>
                    <LeftContainer
                        todos={this.state.todos}
                        completeTask={(id) => {
                            const todosTemp = this.state.todos;
                            let indexOf = todosTemp.findIndex(
                                (item) => item.id === id
                            );
                            if (indexOf !== -1) {
                                todosTemp[indexOf] = {
                                    ...todosTemp[indexOf],
                                    isTaskCompleted: true,
                                };
                            }
                            this.setState({ todos: todosTemp });
                        }}
                        addTodo={(todoData) => {
                            const todosTemp = this.state.todos;
                            const newData = {
                                id: new Date().getTime(),
                                text: todoData,
                                isTaskCompleted: false,
                            };
                            todosTemp.push(newData);
                            this.setState({ todos: todosTemp });
                        }}
                    />
                </Col>
                <Col span={12}>
                    <RightContainer todos={this.state.todos} />
                </Col>
            </Row>
        );
    }
}
