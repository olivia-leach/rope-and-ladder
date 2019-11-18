import React, { Component, Fragment } from 'react';
import { MDCTextField } from '@material/textfield/index';
import "../styles/Email.scss";
import Signup from '../signup.png'

class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
        }
    }

    onTextChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value,
            submitted: false,
        })
    }

    componentDidMount() {
        const textFields = document.querySelectorAll('.mdc-text-field');
        for (const textField of textFields) {
            MDCTextField.attachTo(textField);
        }
    }

    getFormData() {
        const data = { email: this.state.email, name: this.state.name }
        data.formDataNameOrder = JSON.stringify(data);
        return data;
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({ submitting: true })
        const data = this.getFormData();
    
        let encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')

        const url = 'https://script.google.com/macros/s/AKfycbx0hWsJBWiSzDOIAzJldsRg0wdj7NwwtFO6vFNDS_cqbKAbvtQe/exec'
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(encoded);
        xhr.onreadystatechange = function() {
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
    }

    render() {
        const emailValid = this.state.email.includes('@') && this.state.email.includes('.')
        const canSubmit = !!this.state.name && emailValid
        return (
        <div className='email-container'>
            {this.state.submitted || this.state.submitting ? <h1 className='call-to-action-instructions text-center'>Thanks. We'll be in touch soon.</h1> :
            <Fragment>
            <div className='flex flex-center'>
                <img className='sign-up' src={Signup} />
            </div>
            <div className='flex flex-center input-container'>
            <div>
                <div className="mdc-text-field">
                <input type="text" name='name' id="name-field" className="mdc-text-field__input" onChange={this.onTextChange} />
                <label className="mdc-floating-label" htmlFor="name-field">
                    NAME
                </label>
                <div className="mdc-line-ripple" />
                </div>
            </div>
            <div>
                <div className="mdc-text-field">
                <input type="email" name='email' id="email-field" className="mdc-text-field__input" onChange={this.onTextChange} />
                <label className="mdc-floating-label" htmlFor="email-field">
                    EMAIL
                </label>
                <div className="mdc-line-ripple" />
                </div>
            </div>
            <button className="mdc-button mdc-button--raised subscribe" disabled={!canSubmit || this.state.submitting || this.state.submitted} onClick={this.submitForm}>
                {this.state.submitting ?
                    <span className="mdc-button__label">Signing up...</span>
                :
                <span className="mdc-button__label">
                    {this.state.submitted ? 'Thank you' : 'Subscribe'}</span>}
            </button>
            </div>
            </Fragment>}
            </div>
        )
    }
}

export default Email;
