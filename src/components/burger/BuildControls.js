import React from "react";
import PropTypes from "prop-types";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" }
];
const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.addHandler(ctrl.type)}
        removed={() => props.removeHandler(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.canOrder}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

BuildControls.propTypes = {
  addHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default BuildControls;
