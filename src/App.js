import React, { Component } from "react";
import Layout from "./components/containers/Layout";
import BurgerBuilder from "./components/containers/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
