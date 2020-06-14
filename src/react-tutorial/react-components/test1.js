import React from 'react';

class FirstClass extends React.Component {
    onClickHandler = () => {
        alert("Clicked")
    }
    
    render() {
        let someVar = <h1 style={ { backgroundColor: "blue", color: "white" } } onClick={this.onClickHandler} >This is from First Class Code Data</h1>;
        return someVar;
    }
}

export default FirstClass;