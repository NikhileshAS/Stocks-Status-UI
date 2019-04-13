import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import Stock from "./containers/Stock";
import Loading from "./components/UI/Loading";

class App extends Component {
  render() {
    return <Layout>{this.props.isLoading ? <Loading /> : <Stock />}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.monthly_stock_loading || state.daily_stock_loading || false
  };
};
export default connect(mapStateToProps)(App);
