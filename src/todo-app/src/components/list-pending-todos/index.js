import React, { Component } from 'react';
import { Checkbox } from 'antd';

const testData = [
    {
        id: 123,
        text: "Sample 1",
        isTaskCompleted: false
    },
    {
        id: 436,
        text: "Sample 2",
        isTaskCompleted: false
    },
    {
        id: 456894,
        text: "Sample 3",
        isTaskCompleted: true
    }
]

export default class ListPendingTodos extends Component {
    render() {
        // const todos = this.props.todos.filter(item => item.isTaskCompleted === false);
        const todos = testData.filter(item => item.isTaskCompleted === false);

        const PendingList = todos.map(item => {
            return (
                <div>
                    <Checkbox key={item.id} onChange={(e) => this.props.completeTask(item.id)}>{item.text}</Checkbox>
                </div>
            );
        })

        return <div>
            {PendingList}
        </div>;
    }
}