import React from 'react';
import { useNavigate } from 'react-router-dom';
const Slidebar = ({ isOpen, toggleSidebar }) => {
    // Function to handle navigation to quiz page
    const navigate = useNavigate()
    const navigateToQuiz = (index) => {
      // Assuming '/quizPage/:id' is your quiz page route
      console.log(index+1)
       navigate(`/quizPage/${index}`)
    };

    const handleOnClick = (index) => {
      toggleSidebar()
      navigateToQuiz(index)
    }

  return (
    <div className={` z-40 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute rounded-3xl inset-0 bg-gray-50 bg-opacity-75" onClick={toggleSidebar}></div>
      <div className="absolute rounded-3xl inset-y-0 left-0 flex flex-col max-w-xs w-full bg-white shadow-xl">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6 text-black" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 h-0 px-2 overflow-y-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <nav className="mt-5 px-2 space-y-1">
            {[...Array(9)].map((_, index) => (
              <a
                key={index}
                // to={`'/quizPage/${index + 1}'`}
                
                onClick={()=>handleOnClick(index+1)}
                className="group flex gap-2 items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              >
                <span className='rounded-full px-4 py-2 border-[2px] border-[#1B1B1B]'>{index + 1}</span>
                <div className="flex items-center gap-10 rounded">
                  <label htmlFor={`bordered-radio-${index}`} className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <div className='flex flex-col font-Satoshi font-medium text-lg justify-around'>
                      <span className="flex-1">Mcq </span>
                      <span className="text-gray-500 font-Satoshi font-normal text-xs">5 Points</span>
                    </div>
                  </label>
                  <input id={`bordered-radio-${index}`} type="checkbox" value="" className="appearance-none w-12 h-6 border-2 border-black rounded-full bg-white checked:bg-[#039855] checked:border-0"/>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
