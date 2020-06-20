import React, {Component} from 'react';

export default class ParentComponent extends Component {
    render(){
        console.log(this.props.children)
        return (
            <div className={this.props.className}>
                <h1>Dynamic Content to be Displayed</h1>
                {this.props.children}
            </div>
        );
    }
}