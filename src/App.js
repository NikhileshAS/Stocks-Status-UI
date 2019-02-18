import React, { Component } from "react";

import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import Stock from "./containers/Stock";

class App extends Component {
  render() {
    return (
      <Layout>
        <Stock />
      </Layout>
    );
  }
}

export default App;
