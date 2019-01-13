import React from "react";
import PropTypes from "prop-types";
import Logo from "../ui/Logo";
import NavItems from "./NavItems";
import classes from "./SideDrawer.css";
import Backdrop from "../ui/Backdrop";
import Wrap from "../Wrap";

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.isOpen) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Wrap>
      <Backdrop show={props.isOpen} clicked={props.closeHandler} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Wrap>
  );
};

SideDrawer.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default SideDrawer;
