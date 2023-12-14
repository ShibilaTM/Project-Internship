import React, { useState } from 'react'
import { QuizData6 } from '../Data/QuizData6'
import QuizResult from './QuizResult';
import './Quiz.css';

function Quiz6() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData6.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption==QuizData6[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div className="boss">

        <p className="heading-txt">VIVA VOCE Questions</p>
        <div className="box">
        <div className="quizcontainer">
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData6.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData6[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData6[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </> )}
        </div>
        </div>  
    </div>
  )
}

export default Quiz6