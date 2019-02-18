import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchStockFromAPI } from "../../../store/actions/stocks";

const { Header, Content, Sider } = Layout;

const mapTitleToTicker = {
  AMAZON: "AMZN",
  MICROSOFT: "MSFT",
  ORACLE: "ORCL",
  ALIBABA: "BABA",
  APPLE: "AAPL",
  GOOGLE: "GOOGL",
  FACEBOOK: "FB",
  INFOSYS: "INFY",
  HCL: "HCL",
  TCS: "TCS"
};

class CustomLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">View Stock Info</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
              {this.props.stocks.map((stock, index) => {
                return (
                  <Menu.Item
                    key={index}
                    onClick={() =>
                      this.props.onFetchStockData(mapTitleToTicker[stock.title])
                    }
                  >
                    {stock.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchStockData: title => dispatch(fetchStockFromAPI(title))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomLayout);
