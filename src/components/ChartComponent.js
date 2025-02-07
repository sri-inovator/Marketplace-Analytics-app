import React, { useState } from "react";
import { ColumnChart, PieChart, LineChart } from "react-chartkick";
import "chartkick/chart.js"; // Import Chart.js for rendering
import styled from "@emotion/styled";

const AnalyticsDashboard = ({ chartType, data, typeFrom }) => {
  console.log("ss  " +data + chartType);
  let formattedData;
  if (chartType === "pie" && typeFrom === "topic") {
    formattedData = data.map((entry) => [[`${entry.name}: ${Math.ceil(entry.count)} %`],  `${Math.ceil(entry.count)}%`]);
  } else {
    formattedData = data.map((entry) => [`${entry.month} ${entry.year}`, entry.count]);
  }
  // const formattedData = data.map((entry) => [`${entry.month} ${entry.year}`, entry.count]);

  return (
    <RootContainer>
      {/* Render Chart */}
      <div className="w-full h-[400px] flex justify-center items-center bg-gray-100 rounded-xl p-4 shadow-lg">
        <br></br>
        {chartType === "bar" && <ColumnChart data={formattedData} />}
        {chartType === "pie" && <PieChart data={formattedData} />}
        {chartType === "line" && <LineChart data={formattedData} />}
      </div>
    </RootContainer>
  );
};

const RootContainer = styled.div`

`;

export default AnalyticsDashboard;
