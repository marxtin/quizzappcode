import React from "react";
import styles from "./HeaderMobile.module.css";
import Earth from "../../images/earthrotate.gif";
import Menu from "../headmobile/Menu"

const Header = () => {
  const {
    earthgif,
    earth,
    quizz,
    headline,
    header_container,
    header_contacts,
  } = styles;
  
  return (
    <div className={header_container}>
      <h1 className={headline}>
        <span className={earth}>Earth</span>{" "}
        <img className={earthgif} src={Earth} alt="earth" />{" "}
        <span className={quizz}>Quizz</span>
      </h1>
      <div className={header_contacts}><Menu/></div>
    </div>
  );
};

export default Header;
