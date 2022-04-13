import React, {useContext} from 'react';
import GlobalFonts from "./fonts/fonts.js";
import Turn from "./images/turn.png";
import MainPage from "./components/main/MainPage";
import QuizContext from "./context/QuizContext";

import './App.css';

const App = () => {
const {orientation, mobile} = useContext(QuizContext)

const keyZero = `${orientation}-${mobile}`
 
  return (
    <>
    <GlobalFonts />
     {{
       "landscape-false":<MainPage/>,
       "portrait-false":<MainPage/>,
       "portrait-true":<MainPage/>,
       "landscape-true":<img style={{width: "100px"}} src={Turn} alt="turn around"/>
      
       }[keyZero]}
    </>
  );
}

export default App;