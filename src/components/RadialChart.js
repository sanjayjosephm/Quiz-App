import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = ({ attended, total }) => {
  
  const data = {
    datasets: [
      {
        data: [attended, total - attended],
        backgroundColor: ['#FF8C00', '#E0E0E0'],
        hoverBackgroundColor: ['#FF8C00', '#E0E0E0'],
        borderWidth: 0,
        borderColor: ['#FF8C00', '#E0E0E0'], // Customize border color
        borderRadius: 5, // Add border radius for rounded edges
        spacing: 3,
        
      },
    ],
  };

  const options = {
    cutout: '85%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className='flex gap-4 md:flex-row sm:flex-col '>
        <div className="bg-white p-4 rounded-3xl flex gap-1 flex-col items-center">
        <h2 className="text-base font-Satoshi font-bold ">Questions Attended</h2>
        <div className="w-32 h-32 mb-4 relative">
            <Doughnut  data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{attended}</span>
            </div>
        </div>
        <div className="w-full">
            <div className="flex justify-between items-center gap-4 text-sm mb-1">
            <div className="flex items-center">
                <span className="w-3 h-3 bg-[#F58A46] inline-block font-Satoshi rounded mr-2"></span>
                <span className='font-Satoshi font-medium text-xs'>Total Questions Attended</span>
            </div>
            <span className='font-Satoshi font-medium text-xs'>{attended}</span>
            </div>
            <div className='h-[1px] my-3 bg-black'></div>
            <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
                <span className="w-3 h-3 bg-gray-500 inline-block rounded mr-2"></span>
                <span className='font-Satoshi font-medium text-xs'>Total Questions Asked</span>
            </div>
            <span className='font-Satoshi font-medium text-xs'>{total}</span>
            </div>
        </div>
        </div>
        <div className="bg-white p-4 rounded-3xl flex gap-1 flex-col items-center">
        <h2 className="text-base font-Satoshi font-bold">Correct Answers</h2>
        <div className="w-32 h-32 mb-4 relative">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{attended}</span>
            </div>
        </div>
        <div className="w-full">
            <div className="flex justify-between items-center gap-4 text-sm mb-1">
            <div className="flex items-center">
                <span className="w-3 h-3 bg-[#60D074] inline-block font-Satoshi rounded mr-2"></span>
                <span className='font-Satoshi font-medium text-xs'>Total Questions Attended</span>
            </div>
            <span className='font-Satoshi font-medium text-xs'>{attended}</span>
            </div>
            <div className='h-[1px] my-3 bg-black'></div>
            <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
                <span className="w-3 h-3 bg-gray-500 inline-block rounded mr-2"></span>
                <span className='font-Satoshi font-medium text-xs'>Total Questions Asked</span>
            </div>
            <span className='font-Satoshi font-medium text-xs'>{total}</span>
            </div>
        </div>
        </div>
    </div>
    
  );
};

export default RadialChart;
