import React, { Component } from "react";
import Cart from "./Cart";

class LeftPane extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Choose your favorate Watch</h2>
          <label style={{ padding: "20px", fontSize: "20px" }}>
            <select onChange={(event) => event && event.target.value && this.props.addToCart(event.target.value)}>
              {this.props.watches.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.watch}
                </option>
              ))}
            </select>
          </label>
        </div>
        <main
          style={{
            padding: "20px 100px 300px 20px",
            margin: "50px 10px 250px 120px",
            border: "2px solid black",
            backgroundColor: "lightblue",
          }}
        >
          <Cart
            listItems={this.props.listItems}
          // watches={this.props.watches}
          // completeOrder={this.props.completeOrder}
          // addToCart={this.props.addToCart}
          />

          <button
            style={{
              fontSize: "15",
              padding: "3px 20px 3px 20px",
              marginTop: "20px",
            }}
            className="btn btn-secondary btn-sm"
            onClick={this.props.placeOrder}
          >
            Place Order
        </button>
        </main>
      </div>
    );
  }
}

export default LeftPane;
