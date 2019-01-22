import React, { Component } from 'react';
import { MDCTextField } from '@material/textfield/index';
import "../styles/Email.scss";

class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailValid: false
        }
    }

    onEmailChange = (e) => {
        const { value } = e.target
        this.setState({
            email: value,
            emailValid: value.includes('@') && value.includes('.')
        })
    }
    componentDidMount() {
        // const buttons = document.querySelectorAll('.mdc-button');
        // for (const button of buttons) {
        //     MDCRipple.attachTo(button);
        // }

        const textFields = document.querySelectorAll('.mdc-text-field');
        for (const textField of textFields) {
            MDCTextField.attachTo(textField);
        }
    }
    render() {
        return <div className="center-container">
            <h1 className="mdc-typography--headline4">Stay updated.</h1>
            <div>
                <div className="mdc-text-field">
                <input type="email" id="my-text-field" className="mdc-text-field__input" valid={this.state.emailValid} onChange={this.onEmailChange} />
                <label className="mdc-floating-label" htmlFor="my-text-field">
                    Email
                </label>
                <div className="mdc-line-ripple" />
                </div>
            </div>
            <button className="mdc-button mdc-button--outlined" disabled={!this.state.emailValid}>
                <span className="mdc-button__label">Submit</span>
            </button>
          </div>;
    }
}

export default Email;
