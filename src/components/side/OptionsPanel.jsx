import React, {useContext} from "react";
import styles from "./OptionsPanel.module.css";
import QuizContext from "../../context/QuizContext";

const OptionsPanel = () => {
  const { side_panel, mobile_panel, options_text, options_display, options_input, options_button } = styles;
  const {numberOfQuestions,handleInput,handleInputSubmit, mobile} = useContext(QuizContext)
  return (
    <div className={mobile ? mobile_panel : side_panel}>
      <div className={options_text}>
        Welcome to Earth'O'Quizz! Can you champion the quest for knowledge of the
        third planet from the sun? Do you want to learn about what makes our
        home special, beautiful and astonishing? YASS? Awesome! Please choose: How many
        questions do you like to play?
      </div>
      <div className={options_display}>
        <input
          className={options_input}
          type="number"
          value={numberOfQuestions}
          onChange={(e)=>handleInput(e)}
          min="1"
          max="10"
          placeholder="1-10"
        ></input>
        <button className={options_button} type="submit" onClick={()=>handleInputSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default OptionsPanel;
