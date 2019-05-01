import { List } from "antd";
import React from "react";

export default props => {
  return (
    <List
      size="small"
      header="Suggested Stocks"
      bordered
      dataSource={props.data.bestMatches.map(ticker => {
        return { symbol: ticker["1. symbol"], name: ticker["2. name"] };
      })}
      renderItem={item => (
        <List.Item actions={[<a onClick={e => console.log(e)}> View </a>]}>
          <List.Item.Meta title={item.symbol} description={item.name} />
        </List.Item>
      )}
    />
  );
};
