import React, { Component } from "react";

class RightPane extends Component {

  render() {
    const DisplayOrderSummary = this.props.orderSummary.map(item => {
      return (<div>
        <div>
          Order ID: {item.orderId}
          {item.items.map(orderItem => {
            return (
              <div>
                <div>Item Name: {orderItem.watch}</div>
                <div>Order Price: {orderItem.price}</div>
              </div>
            )
          })}
        </div>
        <br /><br /><br /><br />
      </div>)
    });


    return (
      <div>
        <h3>Order Summary</h3>
        {DisplayOrderSummary}
      </div>
    );
  }

}

export default RightPane;
