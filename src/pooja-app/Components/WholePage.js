import React, { Component } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import { Row, Col } from "antd";

class WholePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watches: [
        {
          id: 1,
          watch: "Denim",
          price: 3000,
        },
        {
          id: 2,
          watch: "Fastrack",
          price: 2000,
        },
        {
          id: 3,
          watch: "Sonata",
          price: 3000,
        },
        {
          id: 4,
          watch: "Omega",
          price: 4000,
        },
      ],

      // {watchItem}
      listItems: [],

      // { orderId: 123, items: [{watchItem}] }
      orderSummary: [],
    };
  }


  render() {
    return (
      <Row>
        <Col span={12}>
          <main
            style={{
              backgroundColor: "lightgrey",
            }}
          >
            <LeftPane
              watches={this.state.watches}
              listItems={this.state.listItems}
              addToCart={this.addToCart}
              placeOrder={() => {
                const cartItems = [...this.state.listItems];
                const orderSummary = [...this.state.orderSummary];
                orderSummary.push({
                  orderId: new Date().getTime(),
                  items: cartItems
                })
                const obj = { orderSummary: orderSummary, listItems: [] };
                this.setState(obj);
              }}
            />
          </main>
        </Col>
        <Col span={12}>
          <main
            style={{
              backgroundColor: "lightpink",
              height: "520px",
            }}
          >
            <RightPane
              orderSummary={this.state.orderSummary}
            />
          </main>
        </Col>
      </Row>
    );
  }

  addToCart = (watchId) => {
    const listItems = [...this.state.listItems];
    const data = this.state.watches.filter((item) => item.id === Number(watchId));
    if (data.length === 1) {
      listItems.push(data[0]);
      this.setState({ listItems: listItems });
    }
  };

  handleDelete = (id) => {
    const delet = this.state.listItems.filter((c) => c.id !== id);
    this.setState({ listItems: delet }); //if key and value is same you can simply write counters
  };
}

export default WholePage;
