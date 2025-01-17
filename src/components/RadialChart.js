import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, elements } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = ({ attended, total }) => {
  const createGradient = (ctx, area, color1, color2) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const attendedData = {
    datasets: [
      {
        data: [attended, total - attended],
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }

          return [
            createGradient(ctx, chartArea, "#DC6C2D", "#FF9E68"),
            "#E0E0E0",
          ];
        },
        hoverBackgroundColor: ["#FF8C00", "#E0E0E0"],
        borderWidth: 0,
      },
    ],
  };

  const correctData = {
    datasets: [
      {
        data: [200, 60],
        backgroundColor: (context) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }

          return [
            createGradient(ctx, chartArea, "#1B9D34", "#60D074"),
            "#E0E0E0",
          ];
        },
        hoverBackgroundColor: ["#60D074", "#E0E0E0"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "85%",
    responsive: true,
    rotation: 90, // Start angle (in degrees)
    // circumference: -360, 
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
    <div className="flex flex-col gap-4 sm:flex-row lg:flex-row">
      <div className="bg-white p-5 rounded-3xl flex gap-1 flex-col items-center">
        <div className="text-start w-full">
          <h2 className="text-base font-Satoshi font-bold text-start">
            Questions Attended
          </h2>
        </div>
        <div className="w-32 h-32 mb-4 relative">
          <Doughnut data={attendedData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">228</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-8 text-sm mb-1">
            <div className="flex items-center">
              <span className="w-3 h-3 inline-block bg-gradient-to-b from-[#C8934B] to-[#F58A46] rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Attended
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">228</span>
          </div>
          <div className="h-[1px] my-3 bg-black"></div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 inline-block mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Asked
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">32</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-3xl flex gap-1 flex-col items-center">
        <div className="text-start w-full">
          <h2 className="text-base font-Satoshi font-bold">Correct Answers</h2>
        </div>
        <div className="w-32 h-32 mb-4 relative">
          <Doughnut data={correctData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">206</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-8 text-sm mb-1">
            <div className="flex items-center">
              <span className="w-3 h-3 inline-block bg-gradient-to-b from-[#1BCB54] to-[#06A15E] rounded mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Correct Answers
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">206</span>
          </div>
          <div className="h-[1px] my-3 bg-black"></div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 inline-block mr-2"></span>
              <span className="font-Satoshi font-medium text-xs">
                Total Questions Attended
              </span>
            </div>
            <span className="font-Satoshi font-medium text-xs">260</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;
