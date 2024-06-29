import React, { useContext } from 'react';
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { QuizContext } from './QuizContext';

const Footer = ({ questionNumber, selectedOption, setSelectedOption }) => {
    const navigate = useNavigate();
    const { markQuestionAsAnswered } = useContext(QuizContext);

    const handleNextClick = () => {
        const nextQuestion = questionNumber < 9 ? questionNumber + 1 : null;
        if (nextQuestion) {
            if (selectedOption) {
                markQuestionAsAnswered(questionNumber);
            }
            setSelectedOption(null); // Clear the selected option
            navigate(`/quizPage/${nextQuestion}`);
        } else {
            navigate("/lastPage");
        }
    };

    return (
        <div className='pt-4'>
            <header className="bg-white py-3 px-4 rounded-[26px] flex justify-between items-center lg:px-14">
                <button className='hidden lg:block'></button>
                <Link to={questionNumber > 1 ? `/quizPage/${questionNumber - 1}` : '/'}
                    className="flex gap-2 lg:gap-4 justify-center items-center bg-white border-[1px] border-[#BBBBBB] rounded-3xl text-xs lg:text-sm font-Satoshi font-bold text-gray-700 px-4 py-2">
                    <MoveLeft size={17} />
                    Previous
                </Link>
                <button
                    onClick={handleNextClick}
                    className="flex gap-2 lg:gap-4 justify-center items-center bg-[#EBEBEB] px-5 py-2 border-[1px] border-[#D4D4D4] rounded-3xl text-xs lg:text-sm font-Satoshi font-bold text-black"
                >
                    Save & Next
                    <MoveRight size={17} />
                </button>
            </header>
        </div>
    );
};

export default Footer;
