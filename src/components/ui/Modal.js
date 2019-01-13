import React from "react";
import PropTypes from "prop-types";
import classes from "./Modal.css";
import Wrap from "../containers/Wrap";
import Backdrop from "./Backdrop";

class Modal extends React.Component {
  componentWillUpdate() {
    console.log("Modal will update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children != this.props.children
    );
  }

  render() {
    return (
      <Wrap>
        <Backdrop show={this.props.show} clicked={this.props.close} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Wrap>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Modal;
