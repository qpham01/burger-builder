import React from "react";
import PropTypes from "prop-types";
import classes from "./Modal.css";
import Wrap from "../Wrap";
import Backdrop from "./Backdrop";

const Modal = props => {
  return (
    <Wrap>
      <Backdrop show={props.show} clicked={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Wrap>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Modal;
