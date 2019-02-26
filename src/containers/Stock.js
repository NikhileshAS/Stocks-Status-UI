import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/UI/Loading";
import Chart from "../components/Chart/StockChart";
import "../components/Chart/StockChart.css";
import CustomCard from "../components/UI/Card/Card";

class Stock extends Component {
  render() {
    console.log(this.props.daily_stock);

    return this.props.loading || this.props.daily_stock_loading ? (
      <Loading />
    ) : this.props.shouldLoad ? (
      <div>
        <div className="wrap">
          <div className="chart">
            <Chart
              label="This Season"
              xAxis={
                this.props.stock
                  ? Object.keys(
                      this.props.stock["Time Series (Daily)"]
                    ).reverse()
                  : null
              }
              yAxis={
                this.props.stock
                  ? Object.keys(this.props.stock["Time Series (Daily)"])
                      .map(
                        time =>
                          this.props.stock["Time Series (Daily)"][time][
                            "4. close"
                          ]
                      )
                      .reverse()
                  : null
              }
            />
          </div>
          <div className="chart">
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
        </div>
        <div className="card">
          <CustomCard />
        </div>
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
