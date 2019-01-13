import React from "react";
import PropTypes from "prop-types";
import classes from "./NavItem.css";

const NavItem = props => {
  return (
    <li className={classes.NavItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  link: PropTypes.string.isRequired
};

export default NavItem;
