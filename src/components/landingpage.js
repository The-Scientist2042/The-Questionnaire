import React from "react";
import useEffect from "react";
import useTheme from "./Themecontext";
import useToggle from "./Themecontext";

export default function LandingPage(props){

    const [quote,setQuote] = React.useState('')


    


    React.useEffect(
        () => 
        {
            fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(response => setQuote(response))
        }
        ,[]
    )

    console.log(quote)



    return(
        <div className="row lrow">
                <div className="col-6" id="lcolone">
                    The Questionnaire
                </div>
                <div className="col-6" id='lcoltwo'>
                    <button onClick={props.dark} >
                   
                    </button>
                </div>
                <div className="col-12" id="lcolthree" >
                    
                </div>
                <div className="row" id="lrow2">
                    <div className="col-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6" id="lrow21">
                        <strong style={{marginRight:'1rem'}}>
                        The Questions Are Ready :
                        </strong>
                        <br />
                        Note: You have ten minutes to answer all the questions
                        <br />
                        The questions are available behind the <br />
                        Get Started button, Grab a pen and a book and see how much you can get right.
                        <br />
                        Have fun :)
                    </div>
                    <div className="col-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6" id="lrow22" >
                        <button 
                        onClick={props.easy}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="row" id="quote">
                        <aside id="col">
                            <h2 id="name">
                            Anime: {quote.anime}
                            </h2>
                            <h4 id="aquote">
                            {quote.quote}
                            </h4>
                            <h3 id="character">
                            ~ {quote.character}

                            </h3>
                            
                        </aside>
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