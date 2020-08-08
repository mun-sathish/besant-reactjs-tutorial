import React, { Component } from "react";
import { Input } from "antd";
import { ListPendingTodos } from "../components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Reducer1Actions,
    Reducer2Actions,
} from "../../../react-tutorial/redux-tut/store/actions";

class LeftContainer extends Component {
    render() {
        // this.props.chgR1Type("Data");
        console.log(this.props.red1);
        return (
            <div>
                {/* <div>
                    Type: {this.props.red1.type ? this.props.red1.type : "Yet to Set"}<br />
                    Data Available: {this.props.red1.dataAvailable ? "TRUE" : "FALSE"}<br />
                    Reducer2 Data: {this.props.red2.length > 0 ? this.props.red2 : "Empty Array"}<br /><br />
                    <button onClick={() => this.props.chgR1Type(new Date().getTime())}>Change Type</button>
                    <button onClick={() => this.props.chgR1EnableData()}>Data to True</button>
                    <button onClick={() => this.props.chgR1DisableData()}>Data to FALSE</button>
                    <button onClick={() => this.props.chgR2Array(new Date().getTime())}>Add to Array</button>
                    <button onClick={() => this.props.chgR2Pop()}>Pop from Array</button>
                </div> */}
                <div style={{ padding: "20px" }}>
                    <Input.Search
                        placeholder="Add Todo Item"
                        enterButton="ADD"
                        onSearch={(value) => value && this.props.addTodo(value)}
                    />
                    <br />
                    <br />
                    <br />
                    <ListPendingTodos
                        todos={this.props.todos}
                        completeTask={this.props.completeTask}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    red1: state.reducer1,
    red2: state.reducer2,
});

const mapDispatchToProps = (dispatch) => ({
    chgR1Type: bindActionCreators(Reducer1Actions.chgR1Type, dispatch),
    chgR1EnableData: bindActionCreators(
        Reducer1Actions.chgR1EnableData,
        dispatch
    ),
    chgR1DisableData: bindActionCreators(
        Reducer1Actions.chgR1DisableData,
        dispatch
    ),
    chgR2Array: bindActionCreators(Reducer2Actions.chgR2Array, dispatch),
    chgR2Pop: bindActionCreators(Reducer2Actions.chgR2Pop, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
