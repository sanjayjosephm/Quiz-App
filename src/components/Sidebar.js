// Sidebar.js
import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen lg:w-1/6 bg-white rounded-tr-[36px] rounded-br-[36px]">
        <div className='py-5'>
            <div className="p-4 lg:p-4 text-center">
                <h1 className="text-2xl font-extrabold text-[#695AE0] font-Satoshi lg:text-4xl">Øendo</h1>
            </div>
            <nav className="my-12">
                <ul>
                <li to="/" className="flex py-7 items-center text-[#695AE0] hover:bg-gray-200 cursor-pointer">
                    <div className='flex gap-3 lg:gap-6 justify-center items-center'>
                        <div className='w-1 h-8 bg-[#695AE0] rounded-tr-[6px] rounded-br-[6px]'></div>
                        <div className='flex gap-3 lg:gap-6'>
                            <LayoutGrid />
                            <span>
                                Tests
                            </span>
                        </div>
                        {/* <div></div> */}
                    </div>
                </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Sidebar;
