import React, { useContext } from 'react';
import { SidebarContext } from './SidebarContext';
import Slidebar from './Slidebar';

const QuestionPage = ({ questionNumber }) => {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);
    console.log(sidebarOpen, toggleSidebar)

    return (
        <div className="relative bg-white h-full p-6 pt-10 rounded-3xl flex-1 font-Satoshi font-medium">
            <h2 className="text-lg mb-11">Question {questionNumber}</h2>
            <p className="mb-4 text-lg">
                Rs. 1000 Is Invested At 5% Per Annum Simple Interest. If The Interest Is Added To The Principal After Every 10 Years, The Amount Will Become Rs. 2000 After
            </p>
            <Slidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default QuestionPage;
