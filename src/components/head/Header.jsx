import React from "react";
import styles from "./Header.module.css";
import Earth from "../../images/earthrotate.gif";


const Header = () => {
  const {
    earthgif,
    earth,
    quizz,
    headline,
    header_container,
    logo,
    subheadline,
    header_contacts,
   
  } = styles;
 
  
  

  const email = "martin.karl.bittner@gmail.com"
  return (
    <div className={header_container}>
      <div className={logo}>
        <h1 className={headline}>
          <span className={earth}>Earth</span>{" "}
          <img className={earthgif} src={Earth} alt="earth" />{" "}
          <span className={quizz}>Quizz</span>
        </h1>
        <h3 className={subheadline}>Test your knowledge about your home planet</h3>
      </div>
      <ul className={header_contacts}>
       
          <li><a href="https://marxtin.github.io" target="_blank" rel="noreferrer" >Home</a></li>
          <li><a href={`mailto:${email}`}>E-Mail Me!</a></li>
        </ul>
     
    </div>
  );
};

export default Header;
