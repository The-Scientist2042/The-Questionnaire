import React from "react";
import gsap from 'gsap'
import data from './Themecontext'
import LandingPage from "./landingpage";
import { useRef,useState,useEffect,forwardRef } from "react";

export default function EasyQuestionPage(props){
    const quiz = data.results

    // const random = Math.floor(Math.random() * 14)
    // const rand = random.toString()

    function display(){
            for (const property in quiz){
                // console.log('red')
                    
                    
                
                // return(
                //     <div>
                //         {property}
                //     </div>
                // )
    }
    }
    const [answers, setAnswers] = useState('button')

    function toGreen(){
        return(
            answers === 'button' ? setAnswers('green') : setAnswers('button') 
        )
    }

    // so I made this function so that when the use clicks on it like an onclick it changes the state value to green but i put that state a the id of the buttons so when it changes i have to id with different designs in my scss file but the bug is that when it is clicked it changes the state of every flipping button :( no wonder most of the examples ive seen are one page questions not having all the questions on one page like i did and i learnt about redux in between coding this so ill improve my state management in upcoming projects.

    const val = Object.entries(quiz).map(
        (gun) => {
            return(
                <div className="row">
                    <div className="col-12">
                    <i class="fa-solid fa-circle-question"></i>  <h1>{gun[1].question}</h1>
                </div>
                <div className="row">
                <div className="row" id="arow">
                    <div className="col-3" id="a1">
                        <button
                        name="answer"
                        id={answers}
                        onClick={toGreen}
                        >
                            {gun[1].incorrect_answers[1]}
                        </button>
                    </div>
                    <div className="col-3" id="a2">
                        <button
                        name="answer"
                        id={answers}
                        >
                            {gun[1].incorrect_answers[0]}
                        </button>
                    </div>
                    <div className="col-3" id="a3">
                        <button
                        name="answer"
                        id={answers}
                        >
                            {gun[1].correct_answer}
                        </button>
                    </div>
                    <div className="col-3" id="a4">
                        <button
                        name="answer"
                        id={answers}
                        >
                            {gun[1].incorrect_answers[2]}
                        </button>
                    </div>
                </div>
            </div>
                </div>
            )
        }
    )
/// The TImer kin.includes(searchElement// We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef();
  
    // The state for our timer
    const [timer, setTimer] = useState('00:10:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e)=> {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:04:00');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setMinutes(deadline.getMinutes() + 4);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
/// End of timer kini
const [timerRed, setTimeRed] = useState('tcol')
const [hide, setHide] = useState('earow')

    useEffect(
        () => {
            
    if(timer === '00:00:30'){
        setTimeRed('tcolred')
    }
    if(timer === '00:00:00'){
        alert('The Timer Has Run Out, Kindly Refresh This Page To Try Again Or Return To The Home Page The Answers are 1) Saitama, 2) 2008, 3) Macroons 4) My Father\'s Journal 5) Giorno Giovanna 6) The Super Dimension Fotress Macross 7) Momoko Koigakubo 8) Another 9) Kill La Kill 10) Pearl Jam  11) Ancient Dragon World 12) Different Gender 13) Red, Black, Yellow 14) Jotaro Kujo 15) Sunrise' )
        setHide('hide')
    }
        }
    )

    
    


    // console.log(Object.entries(quiz))

    // console.log(quiz)


    return(
        <div className="row" id={hide}>
                <div className="col-6" id="ecolone">
                    <h1>
                        The Questionnaire
                    </h1>
                </div>
                <div className="col-6" id='ecoltwo'>
                    <button onClick={props.dark} >
                   
                    </button>
                </div>
                <div className="row" id="row22">
                <div className="col-12" id="col221">
                    <button
                    onClick={props.easy}
                    >
                        HomePage
                    </button>
                </div>
                </div>
                <div className="row" id="trow">
                    <div className="col-6">
                        
                    </div>
                    <div className="col-6" id={timerRed}>
                        <h2>{timer}</h2>
                    </div>
                </div>
                <div className="row" id="qrow">
                    {val}
                </div>
                <footer className="row" id="footer">
                    <div className="col-6" id="footer--col1">
                    <a href="https://twitter.com/OmidioraElyon">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/elyon-omidiora-30403a222/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/The-Scientist2042">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    </div>
                    <div className="col-6" id="footer--col2">
                        &copy; Copyrights Elyon Omidiora 2022 
                    </div>
                </footer>
        </div>
    )
}