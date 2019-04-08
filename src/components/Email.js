import React, { Component } from 'react';
import { MDCTextField } from '@material/textfield/index';
// import { MDCRipple } from '@material'
import "../styles/Email.scss";
import Signup from '../signup.png'

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
            emailValid: value.includes('@') && value.includes('.'),
            submitted: false,
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

     // get all data in form and return object
    getFormData() {
        // add form-specific values into the data
        const data = { email: this.state.email }
        data.formDataNameOrder = JSON.stringify(data);
        data.formGoogleSheetName = 'emails' // default sheet name

        console.log(data);
        return data;
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({ submitting: true })
        const data = this.getFormData();         // get the values submitted in the form
    
        const url = 'https://script.google.com/macros/s/AKfycbx0hWsJBWiSzDOIAzJldsRg0wdj7NwwtFO6vFNDS_cqbKAbvtQe/exec'
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            console.log(xhr.status, xhr.statusText)
            console.log(xhr.responseText)
            if (xhr.status === 200) {
            this.setState({
                submitted: true,
                submitting: false,
            })
            }
            return;
        }.bind(this);
    
        // url encode form data for sending as post data
        let encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
    }

    render() {
        return (
        <div className='email-container'>
            <div className='flex flex-center'>
                <img className='sign-up' src={Signup} />
            </div>
            {/*<h1 className="mdc-typography--headline4 text-center">SIGN UP TO RECEIVE ALBUM RELEASE UPDATES</h1>*/}
            <div className='flex flex-center input-container'>
            <div>
                <div className="mdc-text-field">
                <input type="text" name='name' id="name-field" className="mdc-text-field__input" valid={!!this.state.name} onChange={this.onTextChange} />
                <label className="mdc-floating-label" htmlFor="name-field">
                    NAME
                </label>
                <div className="mdc-line-ripple" />
                </div>
            </div>
            <div>
                <div className="mdc-text-field">
                <input type="email" name='email' id="email-field" className="mdc-text-field__input" valid={this.state.emailValid} onChange={this.onTextChange} />
                <label className="mdc-floating-label" htmlFor="email-field">
                    EMAIL
                </label>
                <div className="mdc-line-ripple" />
                </div>
            </div>
            <button className="mdc-button mdc-button--raised" disabled={!this.state.emailValid || this.state.submitting || this.state.submitted} onClick={this.submitForm}>
                {this.state.submitting ?
                    <span className="mdc-button__label">Signing up...</span>
                :
                <span className="mdc-button__label">
                    {this.state.submitted ? 'Thank you' : 'Subscribe'}</span>}
            </button>
            </div>
            </div>
        )
    }
}

export default Email;
