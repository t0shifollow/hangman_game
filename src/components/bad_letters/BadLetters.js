import React, { Component } from "react";
import "./BadLetters.css";

class BadLetters extends Component {

    getBadLetters(){
       const wrong = this.props.guessedLetters.filter(letter =>{
           return !this.props.word.split('').includes(letter)
        })
        return wrong
    }
    render() {
        return (
            <div className="BadLetters">
                <h4>złe strzały: {this.getBadLetters()}</h4>
            </div>
        );
    }
}

export default BadLetters;
