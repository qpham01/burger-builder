import React from "react";
import PropTypes from "prop-types";
import classes from "./Toolbar.css";
import Logo from "../ui/Logo";
import NavItems from "./NavItems";
import SideDrawerToggle from "./SideDrawerToggle";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggle clickHandler={props.sideDrawerToggler} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

Toolbar.propTypes = {
  sideDrawerToggler: PropTypes.func.isRequired
};

export default Toolbar;
