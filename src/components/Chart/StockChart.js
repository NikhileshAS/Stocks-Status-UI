import React from "react";
import { Line } from "react-chartjs-2";
import Media from "react-responsive";

const Chart = props => {
  const data = {
    labels: props.xAxis,
    datasets: [
      {
        label: props.label,
        data: props.yAxis,
        fill: true, // Fill area under the line
        borderColor: "#1890ff" // Line color
      }
    ]
  };
  return (
    <React.Fragment>
      <Media minWidth={1152}>
        <Line data={data} width={100} height={60} />
      </Media>
      <Media maxWidth={750}>
        <Line data={data} width={200} height={250} />
      </Media>
      <Media maxWidth={1151} minWidth={752}>
        <Line data={data} width={200} height={250} />
      </Media>
    </React.Fragment>
  );
};

export default Chart;
