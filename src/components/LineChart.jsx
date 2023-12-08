import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [0, 15, 7, 23, 15],
        backgroundColor: "orange",
        borderColor: "orangered",
      },
    ],
  };
  return (
    <div className="bg-white border border-secondary">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
