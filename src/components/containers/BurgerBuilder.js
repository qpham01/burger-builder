import React, { Component } from "react";
import Wrap from "../common/Wrap";
import Burger from "../burger/Burger";
import BuildControls from "../burger/BuildControls";
import Modal from "../ui/Modal";
import OrderSummary from "../burger/OrderSummary";
import Spinner from "../ui/Spinner";
import axios from "../../axios-orders";
import withErrorHandler from "../common/WithErrorHandler";

const ingredientPrices = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    canOrder: false,
    ordering: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then(res => {
        console.log("Got ingredients");
        const canOrder = this.ingredientSum(res.data) > 0;
        this.setState({ ingredients: res.data, canOrder: canOrder });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

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
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Jane Doe",
        address: {
          street: "1423 Test Street",
          zipCode: "74234",
          country: "USA"
        },
        email: "jane@foo.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ ordering: false, loading: false });
        console.log("order sent ok");
      })
      .catch(error => {
        this.setState({ ordering: false, loading: false });
        console.log("order sent error: ", error);
      });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Ingredients can't be loaded.</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Wrap>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelOrder={this.cancelOrderHandler}
          continueOrder={this.continueOrderHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    console.log("Loading state: ", this.state.loading);
    return (
      <Wrap>
        <Modal show={this.state.ordering} close={this.cancelOrderHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Wrap>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
