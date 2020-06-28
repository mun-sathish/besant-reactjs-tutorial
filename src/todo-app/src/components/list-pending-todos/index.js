import React, { Component } from 'react';
import { Checkbox } from 'antd';

export default class ListPendingTodos extends Component {
    render() {
        // test
        const todos = this.props.todos.filter(item => this.props.isViewOnly ? item.isTaskCompleted === true : item.isTaskCompleted === false);

        const PendingList = todos.map(item => {
            if (this.props.isViewOnly) {
                return (
                    <div>
                        <Checkbox disabled defaultChecked style={{ margin: '5px', textDecoration: 'line-through' }} key={item.id}>{item.text}</Checkbox>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Checkbox style={{ margin: '5px' }} key={item.id} onChange={(e) => this.props.completeTask(item.id)}>{item.text}</Checkbox>
                    </div>
                );
            }

        })

        return <div>
            {PendingList}
        </div>;
    }
}