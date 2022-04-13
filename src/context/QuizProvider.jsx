import React, { useState, useEffect, useCallback } from "react";
import QuizContext from "./QuizContext";
import shuffled from "../data/questions";
import resultMessages from "../data/resultMsg";
import { win, loose } from "../data/messages";
import useWindowSize from "../hooks/useWindowSize";

const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  //further info in InfoPanel
  const [showSolution, setShowSolution] = useState(false);

  //little messages in QuestionPanel
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [count, setCount] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);

  //start options panel-, questions panel display
  const [showOptions, setShowOptions] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);
  //user choice of play rounds:
  const [arrayLength, setArrayLength] = useState(1);

  const [quote, setQuote] = useState("");

  //switches for mobile:
  const [mobile, setMobile] = useState(false);
  const [heightSwitch, setHeightSwitch] = useState(false);

  //draw 50/50 joker
  const [joker, setJoker] = useState(false);

  //open and close modals
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(true);
  
  const { width, height } = useWindowSize();

  //Share Data
  const title = `I played Earth'O'Quizz and got a score of ${score}/${arrayLength}! But what's more important: I learned something!`;
  const shareUrl = "https://marxtin.github.io/earth-o-quizz";

  const isLandscape = () =>
      window.matchMedia("(orientation:landscape)").matches,
    [orientation, setOrientation] = useState(
      isLandscape() ? "landscape" : "portrait"
    );

  const onWindowResize = useCallback(() => {
    clearTimeout(window.resizeLag);
    window.resizeLag = setTimeout(() => {
      delete window.resizeLag;
      setOrientation(isLandscape() ? "landscape" : "portrait");
    }, 200);
  }, []);

  

  useEffect(() => {
    window.onresize = () => {
      if (width <= 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
      onWindowResize();
     
    };
  }, [width, onWindowResize]);

  useEffect(() => {
    window.onload = () => {
      if (width <= 800) {
        setMobile(true);
      }else{
        setMobile(false);
      }
    };
  }, [width]);

  useEffect(() => {
    if (height <= 500){
      setHeightSwitch(true)
    }else{
      setHeightSwitch(false);
    }
  },[height])

  const handleInput = (e) => {
    setNumberOfQuestions(parseInt(e.target.value));
  };

  const handleInputSubmit = () => {
    setArrayLength(numberOfQuestions);
    setShowOptions(false);
    setShowQuestions(true);
  };

  const questionShuffle = shuffled.slice(0, arrayLength);

  function randomIntFromInterval(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setMessage(win[randomIntFromInterval(1, win.length - 1)]);
      console.log(message);
      setShowMessage(true);
    } else {
      setMessage(loose[randomIntFromInterval(1, loose.length - 1)]);
      setShowMessage(true);
      console.log(message);
    }

    setCount((prev) => prev + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= questionShuffle.length) {
      setShowSolution(true);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionShuffle.length) {
      setCurrentQuestion(nextQuestion);
      setShowSolution(false);
      setShowMessage(false);
      setJoker(false);
    }
  };

  const handleJoker = () => {
    setJoker(true);
  };

  const handleClose = () => {
    setClose(false);
  };
  const handleCloseModal = () => {
    setMenu(false);
  };

  const handleMenuClick = () => {
    setMenu(true);
  };

  useEffect(() => {
    if (count === questionShuffle.length) {
      setShowScore(true);
      setShowMessage(true);
      
      if (arrayLength / score >= 2) {
        setQuote(
          resultMessages.positive[
            randomIntFromInterval(0, resultMessages.positive.length - 1)
          ].text
        );
      } else {
        setQuote(
          resultMessages.neutral[
            randomIntFromInterval(0, resultMessages.neutral.length - 1)
          ].text
        );
      }
    }
  }, [count, questionShuffle.length, arrayLength, score]);
   

  const handlePlayAgain = () => {
    window.location.reload()
  }

  return (
    <QuizContext.Provider
      value={{
        questionShuffle,
        showSolution,
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
        showScore,
        message,
        showMessage,
        handleAnswerClick,
        handleNext,
        handleInput,
        numberOfQuestions,
        handleInputSubmit,
        showOptions,
        showQuestions,

        title,
        shareUrl,
        quote,
        mobile,
        joker,
        handleJoker,
        close,
        handleClose,

        menu,
        handleMenuClick,
        handleCloseModal,
        orientation,
       
        width,
        heightSwitch,
        handlePlayAgain,
      
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
