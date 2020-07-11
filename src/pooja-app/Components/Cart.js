import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Cart extends Component {
  render() {
    const listItem = this.props.listItems;

    let price = 0;
    const PendingList = listItem.map((item) => {
      price = price + item.price;
      return (
        <div key={item.id}>
          {item.watch} | {item.price}
        </div>
      );
    });

    const TotalRow = () => {
      if (price > 0) {
        return (
          <b><div >
            {"TotalCost"} = {price}
          </div></b>
        );
      } else return null;
    };

    return (
      <div>
        <Container>
          <div>Item Name | Price</div>
          {PendingList}
          <TotalRow></TotalRow>
        </Container>
      </div>
    );

    // const watches = this.props.listItem.filter(
    //   (item) => item.completeOrder === false
    // // );

    // const CartList = watches.map((item) => {
    //   return (
    //     <div>
    //       <Input.Search
    //         placeholder={item.watch + "    " + item.price}
    //         enterButton="Place Order"
    //         onSearch={(item) => this.props.completeOrder(item.id)}
    //       />
    //     </div>
    //   );
    // });

    // return <div>{CartList}</div>;
  }
}

export default Cart;
