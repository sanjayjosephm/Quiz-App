import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, elements } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = ({ attended, total }) => {
  const attendedData = {
    datasets: [
      {
        data: [attended, total - attended],
        backgroundColor: ["#FF8C00", "#E0E0E0"],
        hoverBackgroundColor: ["#FF8C00", "#E0E0E0"],
        borderWidth: 0,
        borderColor: ["#FF8C00", "#E0E0E0"], // Customize border color
      },
    ],
  };

  const correctData = {
    datasets: [
      {
        data: [attended, total - attended],
        backgroundColor: ["#60D074", "#E0E0E0"],
        hoverBackgroundColor: ["#60D074", "#E0E0E0"],
        borderWidth: 0,
        borderColor: ["#60D074", "#E0E0E0"], // Customize border color

      },
    ],
  };

  const options = {
    cutout: "85%",
    responsive: true,

    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    elements:{
      arc:{
        
      }
    }
    
  };

  return (
    <div className="flex gap-4 md:flex-row sm:flex-col">
      <div className="bg-white p-4 rounded-3xl flex gap-1 flex-col items-center">
        <div className="text-start w-full">
          <h2 className="text-base font-Satoshi font-bold text-start">
            Questions Attended
          </h2>
        </div>
        <div className="w-32 h-32 mb-4 relative">
          <Doughnut data={attendedData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{attended}</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-4 text-sm mb-1">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#F58A46] inline-block font-Satoshi rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Attended
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">{attended}</span>
          </div>
          <div className="h-[1px] my-3 bg-black"></div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 inline-block rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Asked
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">{total}</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-3xl flex gap-1 flex-col items-center">
        <div className="text-start w-full">
          <h2 className="text-base font-Satoshi font-bold">Correct Answers</h2>
        </div>
        <div className="w-32 h-32 mb-4 relative">
          <Doughnut data={correctData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{attended}</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-4 text-sm mb-1">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#60D074] inline-block font-Satoshi rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Attended
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">{attended}</span>
          </div>
          <div className="h-[1px] my-3 bg-black"></div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 inline-block rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Asked
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;
