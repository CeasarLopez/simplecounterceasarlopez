//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";
function SimpleCounter(props){
    return (<div className="bigCounter">
                <div className="calender">
                    <i className="fa-regular fa-clock"></i>
                </div>
                <div className="five">{props.digitFive}</div>
                <div className="four">{props.digitFour}</div>
                <div className="three">{props.digitThree}</div>
                <div className="two">{props.digitTwo}</div>
                <div className="one">{props.digitOne}</div>
       
            </div>);
};
SimpleCounter.propTypes = {
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};
let counter = 0;
setInterval(function(){
    const five = math.floor(counter/10000)
    const four = math.floor(counter/1000)
    const three = math.floor(counter/100)
    const two = math.floor(counter/10)
    const one = math.floor(counter/1)
    console.log(five, four,three, two, one)

    counter++;
//render your react application
ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />, document.querySelector("#app"));
},1000);
