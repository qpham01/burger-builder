import React, { Component } from "react";
import Wrap from "../components/Wrap";
import Burger from "../components/burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };
  render() {
    return (
      <Wrap>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger building controls</div>
      </Wrap>
    );
  }
}

export default BurgerBuilder;
