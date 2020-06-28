import React, { Component } from 'react';
import { ListPendingTodos } from '../components';

export default class RightContainer extends Component {
    render() {
        return (
            <div>
                <ListPendingTodos todos={this.props.todos} isViewOnly />
            </div>
        );
    }
}