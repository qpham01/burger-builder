import React from "react";
import PropTypes from "prop-types";
import Wrap from "../common/Wrap";
import Button from "../ui/Button";

class OrderSummary extends React.Component {
  // This could be a functional component... doesn't need this lifecycle nethod
  // except for debugging.
  componentWillUpdate() {
    console.log("Will update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    // const price = "Total Price:   $" + this.props.price.toFixed(2);
    return (
      <Wrap>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button buttonType="Danger" clickHandler={this.props.cancelOrder}>
          CANCEL
        </Button>
        <Button buttonType="Success" clickHandler={this.props.continueOrder}>
          CONTINUE
        </Button>
      </Wrap>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  cancelOrder: PropTypes.func.isRequired,
  continueOrder: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
};

export default OrderSummary;
