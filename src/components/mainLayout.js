// MainLayout.js
import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="p-7 pl-8 mb-6 bg-white rounded-[24px] ">
          <h2 className="font-poppins font-normal text-2xl">Quizzes for you!</h2>
        </div>
        <div className="space-y-4 lg:w-2/3 sm:w-full">
          <div className="flex justify-between items-center p-5 bg-[#FFFBED] border-[1px] border-[#FDEBA3] rounded-custom font-poppins">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium font-poppins">
                Cybermind O Mania
              </h3>
              <div className="flex text-[#838383] gap-24">
                <p className="font-poppins font-normal text-sm">
                  Total Questions: <span className="text-[#4D4D4D] font-Satoshi font-medium">120</span>
                </p>
                <p className="font-poppins font-normal text-sm">
                  Total points: <span className="text-[#4D4D4D] font-Satoshi font-medium">120</span>
                </p>
              </div>
            </div>
            <Link to="/quizPage/1" className="px-[36px] py-[12px] font-Satoshi font-semibold text-base bg-[#FBD748] text-black rounded-button">
              Solve Challenge
            </Link>
          </div>
          <div className="flex justify-between items-center p-5 bg-white border-[1px] border-[#F2F2F2] rounded-custom font-poppins hover:bg-[#FFFBED] hover:border-[#FDEBA3]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium font-poppins">
                Cybermind O Mania
              </h3>
              <div className="flex text-[#838383] gap-24">
                <p className="font-poppins font-normal text-sm">
                  Total Questions: <span className="text-[#4D4D4D] font-Satoshi font-medium">120</span>
                </p>
                <p className="font-poppins font-normal text-sm">
                  Total points: <span className="text-[#4D4D4D] font-Satoshi font-medium">120</span>
                </p>
              </div>
            </div>
            <Link to="/quizPage/1" className="px-[36px] py-[12px] font-Satoshi font-semibold text-base bg-white border-[2px] border-[#DDDDDD] hover:bg-[#FBD748] hover:border-[#FBD748] text-black rounded-button">
              Solve Challenge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
