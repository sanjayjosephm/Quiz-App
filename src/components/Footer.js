import React,{useEffect} from 'react';
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Footer = ({ questionNumber }) =>{
    console.log(questionNumber)
    const navigate = useNavigate();
    let nextQuestion;
    
    useEffect(()=>{
        if(questionNumber<10){
            nextQuestion = Number(questionNumber)+1
        } else {
            navigate("/lastPage")
        }
    },[questionNumber, navigate])

    // console.log(nextQuestion)
    return(
        <div className='pt-4'>
            <header className="bg-white py-3 px-14  rounded-[26px] flex justify-between items-center">
                <button>
                </button>
                <Link to={questionNumber > 1 ? `/quizPage/${questionNumber - 1}` : '/'}
                 className="flex gap-4 justify-center items-center bg-white border-[1px] border-[#BBBBBB] rounded-3xl text-sm font-Satoshi font-bold text-gray-700 px-4 py-2    ">
                    <MoveLeft size={17}/>
                    Previous
                </Link>
                <button
                    onClick={() => navigate(`/quizPage/${nextQuestion}`)}
                    className="flex gap-4 justify-center items-center bg-[#EBEBEB] px-5 py-2 border-[1px] border-[#D4D4D4] rounded-3xl text-sm font-Satoshi font-bold text-black"
                >
                    Save & Next
                    <MoveRight size={17} />
                </button>
            </header>
        </div>
    )
}

export default Footer;