import React, { Component } from 'react';
import { Input } from 'antd';
import { ListPendingTodos } from '../components';

export default class LeftContainer extends Component {
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <Input.Search
                    placeholder="Add Todo Item"
                    enterButton="ADD"
                    onSearch={value => value && this.props.addTodo(value)}
                />
                <br/><br/><br/>
                <ListPendingTodos todos={this.props.todos} completeTask={this.props.completeTask} />
            </div>
        );
    }
}