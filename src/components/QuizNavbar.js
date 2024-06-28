import React, { useContext } from 'react';
import { MoveLeft, Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { SidebarContext } from './SidebarContext';

const QuizNavbar = () => {
    const { toggleSidebar } = useContext(SidebarContext);

    return (
        <div>
            <header className="bg-white py-3 px-10  rounded-[26px] flex justify-between items-center lg:px-16">
                <div className='flex justify-center items-center lg:gap-6'>
                    <Link to="/">
                        <div className='p-2 hover:bg-[#EBEBEB]  hover:rounded-lg'>
                            <MoveLeft size={17}/>    
                        </div>
                    </Link>
                    <Link onClick={toggleSidebar}>
                        <div className='p-2 hover:bg-[#EBEBEB]  hover:rounded-lg'>
                            <Menu size={19}/>
                        </div>
                    </Link>
                </div>
                <Link to="/lastPage" className="px-5 py-2 font-Satoshi font-bold text-sm bg-[#EBEBEB] text-black rounded-button">
                    End round
                </Link>
            </header>
        </div>
    );
};

export default QuizNavbar;
