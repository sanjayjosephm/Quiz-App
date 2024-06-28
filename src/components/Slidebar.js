import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from './QuizContext';

const Slidebar = ({ isOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const { answeredQuestions } = useContext(QuizContext);

    const navigateToQuiz = (index) => {
        navigate(`/quizPage/${index}`);
    };

    const handleOnClick = (index) => {
        toggleSidebar();
        navigateToQuiz(index);
    };

    return (
        <div className={`z-40 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute rounded-3xl inset-0 bg-gray-50 bg-opacity-75" onClick={toggleSidebar}></div>
            <div className="absolute rounded-3xl inset-y-0 left-0 flex flex-col max-w-xs w-full bg-white shadow-right">
                <div className="flex-1 h-0 px-2 overflow-y-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <nav className="mt-5 px-2 space-y-1">
                        {[...Array(9)].map((_, index) => (
                            <a
                                key={index}
                                onClick={() => handleOnClick(index + 1)}
                                className="group flex gap-2 items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                            >
                                <span className={`rounded-full px-4 py-2 border-[2px] border-black`}>
                                    {index + 1}
                                </span>
                                <div className="flex items-center gap-16 rounded">
                                    <label htmlFor={`bordered-radio-${index}`} className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        <div className='flex flex-col font-Satoshi font-medium text-lg justify-around'>
                                            <span className="flex-1">Mcq </span>
                                            <span className="text-gray-500 font-Satoshi font-normal text-xs">5 Points</span>
                                        </div>
                                    </label>
                                    <input id={`bordered-radio-${index}`} type="checkbox" checked={answeredQuestions.has(index + 1)} readOnly className="appearance-none w-14 h-6 border-2 border-black rounded-full bg-white checked:bg-[#039855] checked:border-0" />
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
