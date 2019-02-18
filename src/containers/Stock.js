import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/UI/Loading";
import Chart from "../components/StockChart";

class Stock extends Component {
  render() {
    const xAxisData = this.props.stock
      ? Object.keys(this.props.stock["Time Series (Daily)"])
      : null;
    const yAxisData = this.props.stock
      ? Object.keys(this.props.stock["Time Series (Daily)"]).map(
          time => this.props.stock["Time Series (Daily)"][time]["4. close"]
        )
      : null;

    console.log(xAxisData, yAxisData);

    return this.props.loading ? (
      <Loading />
    ) : this.props.shouldLoad ? (
      <Chart xAxis={xAxisData} yAxis={yAxisData} />
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    loading: state.loading,
    shouldLoad: state.shouldLoad
  };
};

export default connect(mapStateToProps)(Stock);
