import React from "react";
import PropTypes from "prop-types";
import classes from "./Burger.css";
import Ingredient from "./Ingredient";

const Burger = props => {
  const ingredientArray = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {ingredientArray}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
