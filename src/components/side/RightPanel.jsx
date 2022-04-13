import React, { useContext } from "react";
import styles from "./RightPanel.module.css";
import Pyramids from "../../images/pyramid.png";
import QuizContext from "../../context/QuizContext";
import {
  TelegramIcon,
  TelegramShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "react-share";

const RightPanel = () => {
  const {
    questionShuffle,
    
    handleClose,
    score,

    title,
    shareUrl,
    quote,
    handlePlayAgain
  } = useContext(QuizContext);
  const {
    side_panel,
    score_text,
    score_display,
    score_share,
    score_share_container,
    quote_text,
    bottom_image,
    close_score,
    again_button
  } = styles;
  return (
    <div className={side_panel}>
      <div className={close_score} >
        <svg onClick={() => handleClose()}
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="grey"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </div>
      <div className={score_text}>Your score in this round is:</div>
      <div className={score_display}>
        {score}/{questionShuffle.length}
      </div>
      
      <div className={quote_text}>{quote}</div>
      <div className={quote_text}>Charles Darwin</div>
      <div className={score_text}>Thanks for playing Earth'O'Quizz!</div>
      <div className={score_share_container}>
        <div className={score_share}>
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
        <div className={score_share}>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        <div className={score_share}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className={score_share}>
          <EmailShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
      <button className={again_button} onClick={() =>handlePlayAgain()}>Play again?</button>
      <img src={Pyramids} className={bottom_image} alt="Pyramids of Giza" />
    </div>
  );
};

export default RightPanel;
