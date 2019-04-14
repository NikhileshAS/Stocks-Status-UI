import { Layout, Menu, Button, Drawer } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import MediaQuery from "react-responsive";
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
  state = {
    visible: false
  };
  onClose = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Layout style={{ paddingBottom: 20 }}>
          <Header style={{ display: "flex", flexDirection: "row" }}>
            <MediaQuery maxWidth={1151}>
              <Button
                type="primary"
                style={{ margin: 20 }}
                onClick={this.onClose}
              >
                SLIDE
              </Button>
            </MediaQuery>
            <h2 style={{ color: "white", flex: 1 }}>View Stock Info</h2>
            <MediaQuery minWidth={1152}>
              <Button
                style={{ marginTop: 20, marginBottom: 30 }}
                size={24}
                icon="search"
                ghost
                shape="round"
              >
                Search with Ticker
              </Button>
            </MediaQuery>
          </Header>
        </Layout>
        <Layout>
          <MediaQuery minWidth={1152}>
            <Sider
              collapsible
              collapsedWidth={100}
              width={200}
              style={{ background: "#fff" }}
            >
              <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                {this.props.stocks.map((stock, index) => {
                  return (
                    <Menu.Item
                      disabled={
                        this.props.daily_stock_loading ||
                        this.props.monthly_stock_loading ||
                        false
                      }
                      key={index}
                      onClick={() =>
                        this.props.onFetchStockData(
                          mapTitleToTicker[stock.title]
                        )
                      }
                    >
                      {stock.title}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
          </MediaQuery>
          <MediaQuery maxWidth={1152}>
            <Drawer
              title="Choose Company"
              enableDragHandle
              height={550}
              placement="bottom"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                {this.props.stocks.map((stock, index) => {
                  return (
                    <Menu.Item
                      disabled={
                        this.props.daily_stock_loading ||
                        this.props.monthly_stock_loading ||
                        false
                      }
                      key={index}
                      onClick={() =>
                        this.props.onFetchStockData(
                          mapTitleToTicker[stock.title]
                        )
                      }
                    >
                      {stock.title}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Drawer>
          </MediaQuery>

          <Layout style={{ padding: "0 24px 24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                height: "100%"
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.items,
    daily_stock_loading: state.daily_stock_loading,
    monthly_stock_loading: state.monthly_stock_loading
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
