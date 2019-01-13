import React from "react";
import Wrap from "./Wrap";
import classes from "./Layout.css";
import Toolbar from "../navigation/Toolbar";
import SideDrawer from "../navigation/SideDrawer";

export class Layout extends React.Component {
  state = {
    isOpen: false
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  sideDrawerCloseHandler = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Wrap>
        <Toolbar sideDrawerToggler={this.sideDrawerToggleHandler} />
        <SideDrawer
          isOpen={this.state.isOpen}
          closeHandler={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Wrap>
    );
  }
}

export default Layout;
