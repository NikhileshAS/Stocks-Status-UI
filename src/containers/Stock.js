import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/UI/Loading";
import Chart from "../components/StockChart";

class Stock extends Component {
  render() {
    // console.log(this.props.daily_stock, this.props.stock);

    return this.props.loading || this.props.daily_stock_loading ? (
      <Loading />
    ) : this.props.shouldLoad ? (
      <div>
        <Chart
          label="This Season"
          xAxis={
            this.props.stock
              ? Object.keys(this.props.stock["Time Series (Daily)"]).reverse()
              : null
          }
          yAxis={
            this.props.stock
              ? Object.keys(this.props.stock["Time Series (Daily)"])
                  .map(
                    time =>
                      this.props.stock["Time Series (Daily)"][time]["4. close"]
                  )
                  .reverse()
              : null
          }
        />
        <Chart
          label="This day"
          xAxis={
            this.props.stock
              ? Object.keys(this.props.daily_stock["Time Series (5min)"])
                  .map(key => {
                    return key.split(" ")[1];
                  })
                  .reverse()
              : null
          }
          yAxis={
            this.props.stock
              ? Object.keys(this.props.daily_stock["Time Series (5min)"])
                  .map(
                    time =>
                      this.props.daily_stock["Time Series (5min)"][time][
                        "4. close"
                      ]
                  )
                  .reverse()
              : null
          }
        />
      </div>
    ) : null;
  }
}
const mapStateToProps = state => {
  return {
    stock: state.monthly_stock,
    daily_stock: state.daily_stock,
    loading: state.monthly_stock_loading,
    daily_stock_loading: state.daily_stock_loading,
    shouldLoad: state.shouldLoad
  };
};

export default connect(mapStateToProps)(Stock);
