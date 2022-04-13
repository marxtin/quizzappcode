import React, { useContext } from "react";
import styles from "./MenuModal.module.css";
import Me from "../../images/1.png"
import QuizContext from "../../context/QuizContext";


const Header = () => {
  const { close_icon, container_menu, menu_header, menu_main, menu_list, link, thumb} = styles;

  const { handleCloseModal } = useContext(QuizContext);
  const email = "martin.karl.bittner@gmail.com"
  return (
    <div className={container_menu}>
      <div className={menu_header}>
          <div className={close_icon} onClick={() => handleCloseModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </div>
      </div>
      <div className={menu_main}>
          <ul className={menu_list}>
              <li><img className={thumb} src={Me} alt="Martin" /></li>
              <li><a className={link} href={`https://marxtin.github.io`} rel="noreferrer" target="_blank">Home</a></li>
              <li><a className={link} href={`mailto:${email}`}>E-Mail Me!</a></li>
              <li>Created by Martin Bittner, 2022</li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
