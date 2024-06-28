import React from "react";
import RadialChart from "./RadialChart"
import { Link } from "react-router-dom";
import { MoveLeft } from 'lucide-react';

const LastPage = () => {
  return (
    <div className="p-4 bg-[#F1F1F1] h-screen">
        <div className="flex flex-col ">
            <div className="bg-white flex items-center h-14 lg:h-16  rounded-[26px]">
                {/* <Link to="/" className="flex gap-2 items-center px-5 py-[6px] lg:py-2 ml-5 font-Satoshi font-bold text-sm bg-[#EBEBEB] text-black rounded-button">
                    <MoveLeft size={17}/>
                    Home
                </Link> */}
            </div>
            <div className="p-14 flex flex-col justify-center items-center">
                <h1 className="pb-10 text-[#236C11] font-poppins font-bold text-4xl text-center lg:pb-12">Thank you for taking the test</h1>
                <p className="py-6 text-[#236C11] font-poppins font-bold text-3xl lg:py-8">Your Report</p>
                <div className="flex gap-7">
                    <RadialChart attended={228} total={260}/>
                </div>
            </div>
            <div className="bg-white h-14 lg:h-16  rounded-[26px]">
            </div>
        </div>
    </div>
  );
};

export default LastPage;
