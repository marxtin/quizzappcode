import React, {useContext} from 'react';
import styles from "./ReplayButton.module.css"
import QuizContext from "../../context/QuizContext";


const ReplayButton = () => {
  const {handlePlayAgain} = useContext(QuizContext);
  const {again_button}  = styles;

  return (
    <button className={again_button} onClick={() =>handlePlayAgain()}>Play again?</button>
  )
}

export default ReplayButton