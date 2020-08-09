import React, { Component } from "react";
import store from "../store";
import { postDeposit } from "../store/actions";
import { fetchLoggedInUserData } from "../util";

class Deposit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            depositNumber: undefined,
            depositDesc: undefined,
            walletBalance: (fetchLoggedInUserData() || {}).walletBalance,
        };
    }

    handleDeposit = (e) => {
        console.log(this.state);
        store.dispatch(
            postDeposit({
                depositNumber: this.state.depositNumber,
                depositDesc: this.state.depositDesc,
            })
        );
    };

    render() {
        return (
            <div style={{ padding: "10px" }}>
                <h1>Wallet Balance: {this.state.walletBalance}</h1>
                <div>
                    <h3>Amount to be Deposited:</h3>{" "}
                    <input
                        type="number"
                        onChange={(e) =>
                            this.setState({ depositNumber: e.target.value })
                        }
                    />
                </div>
                <br />

                <div>
                    <h3>Enter the Transaction description:</h3>
                    <textarea
                        placeholder="Enter Description"
                        onChange={(e) =>
                            this.setState({ depositDesc: e.target.value })
                        }
                    ></textarea>
                </div>
                <br />

                <button onClick={this.handleDeposit}>Deposit</button>
            </div>
        );
    }
}

export default Deposit;
