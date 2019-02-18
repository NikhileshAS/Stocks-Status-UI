import React from "react";
import { Card as AntdCard } from "antd";

const { Meta } = AntdCard;

const CustomCard = props => {
  return (
    <AntdCard style={{ width: 300, marginTop: 16 }}>
      <Meta title={props.title} description={props.description} />
    </AntdCard>
  );
};

export default CustomCard;
