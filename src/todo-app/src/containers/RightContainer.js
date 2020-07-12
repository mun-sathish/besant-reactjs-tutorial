import React, { Component } from 'react';
import { ListPendingTodos } from '../components';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Reducer1Actions, Reducer2Actions } from "../../../react-tutorial/redux-tut/store/actions";

class RightContainer extends Component {
    render() {
        return (
            <div>
                <div>
                    Type: {this.props.red1.type ? this.props.red1.type : "Yet to Set"}<br />
                    Data Available: {this.props.red1.dataAvailable ? "TRUE" : "FALSE"}<br />
                    Reducer2 Data: {this.props.red2.length > 0 ? this.props.red2 : "Empty Array"}<br /><br />
                    <button onClick={() => this.props.chgR1Type(new Date().getTime())}>Change Type</button>
                    <button onClick={() => this.props.chgR1EnableData()}>Data to True</button>
                    <button onClick={() => this.props.chgR1DisableData()}>Data to FALSE</button>
                    <button onClick={() => this.props.chgR2Array(new Date().getTime())}>Add to Array</button>
                    <button onClick={() => this.props.chgR2Pop()}>Pop from Array</button>
                </div>
                <ListPendingTodos todos={this.props.todos} isViewOnly />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    red1: state.reducer1,
    red2: state.reducer2
});

const mapDispatchToProps = dispatch => ({
    chgR1Type: bindActionCreators(Reducer1Actions.chgR1Type, dispatch),
    chgR1EnableData: bindActionCreators(Reducer1Actions.chgR1EnableData, dispatch),
    chgR1DisableData: bindActionCreators(Reducer1Actions.chgR1DisableData, dispatch),
    chgR2Array: bindActionCreators(Reducer2Actions.chgR2Array, dispatch),
    chgR2Pop: bindActionCreators(Reducer2Actions.chgR2Pop, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RightContainer);