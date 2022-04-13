import React, { useContext } from "react";
import styles from "./QuestionsMobile.module.css";
import ReplayButton from "../buttons/ReplayButton";
import classNames from "classnames";
import { nanoid } from "nanoid";

import QuizContext from "../../context/QuizContext";

const QuestionsMobile = () => {
  const {
    questionShuffle,
    showSolution,
    currentQuestion,
    message,
    showMessage,
    handleAnswerClick,
    handleNext,
    joker,
    handleJoker,
    
    mobile,
    close
  } = useContext(QuizContext);
  /*   const questionShuffle = shuffleArray(questions) */
  const {
    app_main,
    question_section,
    question_header,
    question_text,
    question_help,
    question_outcome,
    answer_section,
    answer_btn,
    btn,
    btn_green,
    btn_red,
    mobile_solution_text,
    buttons_container,
    next_btn,
   
  } = styles;
 
    const key = `${mobile}-${showMessage}-${close}`;
    const jokerUsed = questionShuffle[currentQuestion].answerOptions.filter(
    obj=>{return obj.hasOwnProperty("isJoker")})
    
    

  return (
    <div className={app_main}>
      <div className={question_section}>
        <div className={question_header}>
          {currentQuestion + 1}/{questionShuffle.length}
        </div>
        <div className={question_text}>
          {questionShuffle[currentQuestion].questionText}
        </div>
        <div className={question_outcome}>{showMessage ? message : " "}</div>
        <div className={buttons_container}>
          <button className={classNames(question_help, btn)} onClick={()=>handleJoker()}>Joker 50/50</button>
         {showMessage && <button className={classNames(question_help, btn, next_btn)} onClick={() => handleNext()}>Next</button>}
         {
          {
            "false-true-true": <></>,
            "true-true-false": <ReplayButton />,
          }[key]
        }
        </div>
      </div>
      <div className={answer_section}>
        {showSolution
          ? questionShuffle[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  key={nanoid()}
                  className={answerOption.isCorrect ? btn_green : btn_red}
                  
                >
                  {answerOption.answerText}
                </button>
              )
            )
          : (joker?  jokerUsed.map(
            (answerOption) => (
              <button
                key={nanoid()}
                className={classNames(answer_btn, btn)}
                onClick={() => handleAnswerClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            )) : questionShuffle[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  key={nanoid()}
                  className={classNames(answer_btn, btn)}
                  onClick={() => handleAnswerClick(answerOption.isCorrect)}
                >
                  {answerOption.answerText}
                </button>
              )
            ))}
      </div>
      <div className={mobile_solution_text}>{showSolution && questionShuffle[currentQuestion].additionalInfo}</div>
    </div>
  );
};

export default QuestionsMobile;


