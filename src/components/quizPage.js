import React from "react";
import QuizNavbar from "./QuizNavbar";
import QuestionPage from "./QuestionPage";
import OptionsPage from "./OptionsPage";
import Footer from "./Footer";
import draggable from "../assets/dragger.png";
import { useParams } from "react-router-dom";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
// import { FaGripVertical } from "react-icons/fa6";

const QuizPage = () => {
  const { questionNumber } = useParams();

  const questionNum = parseInt(questionNumber);


  return (
    <div className="p-4 min-h-screen">
      <QuizNavbar questionNumber={questionNum}/>
      <div className="pt-4 flex h-[77vh]">
        <PanelGroup direction="horizontal">
          <Panel className="relative">
            <QuestionPage questionNumber={questionNum} />
          </Panel>
          <PanelResizeHandle className="group flex items-center justify-center cursor-col-resize">
            <div className="mx-[3px] flex justify-center items-center ">
              <div className="w-3 h-3">
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
