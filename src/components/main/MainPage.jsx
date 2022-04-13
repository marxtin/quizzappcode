import React, { useContext } from "react";
import styles from "./MainPage.module.css";
import Header from "../head/Header";
import HeaderMobile from "../headmobile/HeaderMobile";
import QuestionsPanel from "./QuestionsPanel";
import QuestionsMobile from "../questionsmobile/QuestionsMobile";
import InfoPanel from "./InfoPanel";
import ScoreModal from "../modals/ScoreModal";
import MenuModal from "../modals/MenuModal";
import RightPanel from "../side/RightPanel";
import OptionsPanel from "../side/OptionsPanel";
import QuizContext from "../../context/QuizContext";
import Sahara from "../../images/sahara.png";
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "@react-spring/web";
const BOTTOM_POINT = window.innerHeight - 600;
const RIGHT_POINT = window.innerHeight - 200;

const MainPage = () => {
  const {
    showScore,
    showSolution,
    showOptions,
    showQuestions,
    mobile,
    close,
    mobileWidth,
    menu,
    heightSwitch,
  } = useContext(QuizContext);

  const { container, container_mobile, _center, _center_mobile, bgpic } =
    styles;

  const keyOne = `${showQuestions}-${mobile}`;
  const keyTwo = `${showSolution}-${mobile}`;
  const keyThree = `${showScore}-${mobile}-${close}`;
  const keyFour = `${mobile}-${heightSwitch}`;

  const posRight = useSpring({ x: 0, y: 100 });

  const bindRight = useDrag(
    (params) => {
      posRight.x.set(params.offset[0]);
      posRight.y.set(params.offset[1]);
    },
    {
      bounds: { top: 0, bottom: BOTTOM_POINT, right: RIGHT_POINT },
    }
  );

  return (
    <div ref={mobileWidth} className={mobile ? container_mobile : container}>
      {
        {
          "false-false": <Header />,
          "true-false": <HeaderMobile />,
          "false-true": <HeaderMobile />,
        }[keyFour]
      }
      {menu && <MenuModal />}

      <div className={mobile ? _center_mobile : _center}>
        {
          {
            "true-true-true": <ScoreModal />,
            /* "true-false-true": <RightPanel />, */
          }[keyThree]
        }
        {
          {
            "true-false": <QuestionsPanel />,
            "true-true": <QuestionsMobile />,
          }[keyOne]
        }

        {showOptions && <OptionsPanel />}
        {/* {showSolution && <InfoPanel />} */}
        {
          {
            "true-false": <InfoPanel />,
            "true-true": <></>,
          }[keyTwo]
        }
      </div>
      {
        {
          "true-false-true": (
            <animated.div
              {...bindRight()}
              style={{
                x: posRight.x,
                y: posRight.y,
                touchAction: "none",
              }}
            >
              <RightPanel />
            </animated.div>
          ),
        }[keyThree]
      }
      {mobile ? (
        <img className={bgpic} src={Sahara} alt="Sahara desert" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainPage;
