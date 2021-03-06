import React, { Component } from "react";
import "../../sass/main.scss";

class SubmitForm extends Component {
    _handleSubmit = (e) =>{
       e.preventDefault()
        const letter = this.refs.textInput.value
        this.props.checkLetter(letter)
        this.refs.textInput.value = ''
    }
    render() {
        return (
            <div className="SubmitForm">
                <form onSubmit={this._handleSubmit.bind(this)} className="form">
                    <input type="text" ref='textInput' maxLength={1} placeholder="use only lowercase letter"/>
                    <button className="btn btn-primary mb-2" >SHOT!</button>
                </form>
            </div>
        );
    }
}

export default SubmitForm;