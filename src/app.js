import React from "react";
import Landingpage from "./components/landingpage";
import EasyQuestionPage from "./components/easyquestion";
import Timer from "./components/timer";

export default function App(){

    const [easy,setEasy] = React.useState(false)
    
    console.log(easy)

    function etoggle(){
        setEasy(
            prev => {
                return(
                    prev = !prev
                )
            }
        )
    }

    const [theme,setTheme] = React.useState('light')

    function themeToggle(){
        setTheme(
            prev => {
                return(
                    prev === 'light' ? 'dark' : 'light'
                )
            }
        )
    }
    console.log(theme)
    return(
        <div className="container-fluid" id={theme}>
             {easy ? <EasyQuestionPage easy = {etoggle} dark = {themeToggle} /> : <Landingpage easy = {etoggle}  dark = {themeToggle}/>}
        </div>
       
    )
}