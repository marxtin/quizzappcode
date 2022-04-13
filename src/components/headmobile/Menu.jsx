import React, {useContext} from "react";
import styles from "./Menu.module.css";
import QuizContext from "../../context/QuizContext"

const Menu = () => {
  const { menu } = styles;
  const { handleMenuClick } = useContext(QuizContext)
  return (
    <div className={menu} onClick={()=>handleMenuClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="62px"
        viewBox="0 0 24 24"
        width="62px"
        fill="cyan"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
  );
};

export default Menu;
