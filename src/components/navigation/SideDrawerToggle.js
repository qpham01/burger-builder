import React from "react";
import PropTypes from "prop-types";
import classes from "./SideDrawerToggle.css";

const SideDrawerToggle = props => {
  return (
    <div className={classes.SideDrawerToggle} onClick={props.clickHandler}>
      <div />
      <div />
      <div />
    </div>
  );
};

SideDrawerToggle.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default SideDrawerToggle;
