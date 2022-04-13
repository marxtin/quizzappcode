import React, { useContext } from "react";
import styles from "./InfoPanel.module.css";
import QuizContext from "../../context/QuizContext";

const InfoPanel = () => {
  const { info_panel, info_text} = styles;
  const { questionShuffle, currentQuestion,} = useContext(QuizContext);

  return (
    <div className={info_panel}>
      <div className={info_text}>
        {questionShuffle[currentQuestion].additionalInfo}
      </div>
    </div>
  );
};

export default InfoPanel;
