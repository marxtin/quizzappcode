import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuizProvider from './context/QuizProvider'

ReactDOM.render(
    <React.StrictMode>
        <QuizProvider>
            <App />
        </QuizProvider>
    </React.StrictMode>, document.querySelector('#root')
);


