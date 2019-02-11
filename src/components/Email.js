import React, { Component } from 'react';
import { MDCTextField } from '@material/textfield/index';
// import { MDCRipple } from '@material'
import "../styles/Email.scss";
import Hero from '../Cover-Border.jpg'

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
        return <div className="landing-container flex">
        <img className="landing album-art" src={Hero} />
        <div className='email-container'>
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
            <button className="mdc-button mdc-button--outlined" disabled={!this.state.emailValid || this.state.submitting || this.state.submitted} onClick={this.submitForm}>
                {this.state.submitting ?
                    <span className="mdc-button__label">Signing up...</span>
                :
                <span className="mdc-button__label">
                    {this.state.submitted ? 'Thank you' : 'Submit'}</span>}
            </button>
            </div>
          </div>;
    }
}

export default Email;
