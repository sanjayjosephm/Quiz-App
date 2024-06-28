import React from "react";
import QuizNavbar from "./QuizNavbar";
import QuestionPage from "./QuestionPage";
import OptionsPage from "./OptionsPage";
import Footer from "./Footer";
import draggable from "../assets/dragger.png";
import { useParams } from "react-router-dom";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import useWindowWidth from '../hooks/WindowSize';
// import { FaGripVertical } from "react-icons/fa6";

const QuizPage = () => {
  const { questionNumber } = useParams();
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 650;

  const questionNum = parseInt(questionNumber);


  return (
    <div className="p-4 min-h-screen">
      <QuizNavbar questionNumber={questionNum}/>
      <div className="pt-4 flex h-[77vh] md:flex-col">
        <PanelGroup direction={isMobile ? 'vertical' : 'horizontal'}>
          <Panel className="relative">
            <QuestionPage questionNumber={questionNum} />
          </Panel>
          <PanelResizeHandle className={`group flex items-center justify-center ${isMobile ? 'cursor-row-resize' : 'cursor-col-resize'}`}>
            <div className="mx-[3px] flex justify-center items-center ">
              <div className={`w-3 h-3 ${isMobile ? 'rotate-90' : ''}`}>
                <img src={draggable} alt="dragImg" />
              </div>
            </div>
          </PanelResizeHandle>
          <Panel>
            <OptionsPage questionNumber={questionNum}/>
          </Panel>
        </PanelGroup>
      </div>
      <Footer questionNumber={questionNum} />
    </div>
  );
};

export default QuizPage;
