import React from "react";
import PropTypes from "prop-types";
import Wrap from "../Wrap";
import Button from "../ui/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  // const price = "Total Price:   $" + props.price.toFixed(2);
  return (
    <Wrap>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clickHandler={props.cancelOrder}>
        CANCEL
      </Button>
      <Button buttonType="Success" clickHandler={props.continueOrder}>
        CONTINUE
      </Button>
    </Wrap>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  cancelOrder: PropTypes.func.isRequired,
  continueOrder: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
};

export default OrderSummary;
