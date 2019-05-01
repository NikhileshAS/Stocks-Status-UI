import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import Loading from "../components/UI/Loading";
import Chart from "../components/Chart/StockChart";
import List from "../components/UI/List";

class Stock extends Component {
  render() {
    return this.props.loading ||
      this.props.daily_stock_loading ||
      this.props.search_stock_loading ? (
      <Loading />
    ) : this.props.shouldLoad ? (
      <Row gutter={{ sm: 16, md: 24 }} type="flex" justify="center">
        <Col xs={16} lg={12} md={11}>
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
                        this.props.stock["Time Series (Daily)"][time][
                          "4. close"
                        ]
                    )
                    .reverse()
                : null
            }
          />
        </Col>
        <Col xs={16} lg={12} md={11}>
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
        </Col>
      </Row>
    ) : this.props.search_stock ? (
      <List data={this.props.search_stock} />
    ) : (
      <h2>Click on any company to view stats</h2>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.monthly_stock,
    daily_stock: state.daily_stock,
    loading: state.monthly_stock_loading,
    daily_stock_loading: state.daily_stock_loading,
    shouldLoad: state.shouldLoad,
    search_stock: state.search_stock,
    search_stock_loading: state.search_stock_loading
  };
};

export default connect(mapStateToProps)(Stock);
