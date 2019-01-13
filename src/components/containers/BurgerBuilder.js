import React, { Component } from "react";
import Wrap from "./Wrap";
import Burger from "../burger/Burger";
import BuildControls from "../burger/BuildControls";
import Modal from "../ui/Modal";
import OrderSummary from "../burger/OrderSummary";

const ingredientPrices = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 4,
    canOrder: false,
    ordering: false
  };

  ingredientSum = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ingredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    const canOrder = this.ingredientSum(updatedIngredients) > 0;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      canOrder: canOrder
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = ingredientPrices[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    const canOrder = this.ingredientSum(updatedIngredients) > 0;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      canOrder: canOrder
    });
  };

  orderHandler = () => {
    this.setState({ ordering: true });
  };

  cancelOrderHandler = () => {
    this.setState({ ordering: false });
  };

  continueOrderHandler = () => {
    console.log("Continue order");
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Wrap>
        <Modal show={this.state.ordering} close={this.cancelOrderHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancelOrder={this.cancelOrderHandler}
            continueOrder={this.continueOrderHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
          ordered={this.orderHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canOrder={this.state.canOrder}
        />
      </Wrap>
    );
  }
}

export default BurgerBuilder;
