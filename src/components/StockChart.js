import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => {
  const data = {
    labels: props.xAxis,
    datasets: [
      {
        label: "Statistics",
        data: props.yAxis,
        fill: true, // Fill area under the line
        borderColor: "green" // Line color
      }
    ]
  };
  return <Line data={data} />;
};

export default Chart;
