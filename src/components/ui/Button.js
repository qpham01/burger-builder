import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.css";

const Button = props => {
  return (
    <button
      className={[classes.Button, classes[props.buttonType]].join(" ")}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Button;
