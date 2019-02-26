import React from "react";
import { Card } from "antd";
import "antd/lib/card/style/css";
import style from "./Card.css";

const CustomCard = props => {
  return (
    <Card style={style} size="small">
      Hello
    </Card>
  );
};

export default CustomCard;
