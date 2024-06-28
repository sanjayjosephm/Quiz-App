import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from './SidebarContext';
import Slidebar from './Slidebar';
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const QuestionPage = ({ questionNumber }) => {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);
    const [questionData, setQuestionData] = useState(null);
    console.log("backend",process.env.REACT_APP_BACKEND_URL)
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                setQuestionData(data.data);
                
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []); 

    const question = questionData ? questionData.find(q => q.id === questionNumber) : null;

    if (!question) {
        return (
            <div className='flex justify-center items-center'>
                <div className="relative bg-white h-full p-6 pt-10 rounded-3xl flex-1 font-Satoshi font-medium">
                    <CircularProgress />
                </div>
            </div>
    );
    }
    // console.log(questionData)
    // console.log(question.question)
    // console.log(sidebarOpen, toggleSidebar)

    return (
        <div className="relative bg-white h-full p-6 pt-10 rounded-3xl flex-1 font-Satoshi font-medium">
            <h2 className="text-lg mb-11">Question {questionNumber}</h2>
            <p className="mb-4 text-lg">
                {question.question}
            </p>
            <Slidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default QuestionPage;
