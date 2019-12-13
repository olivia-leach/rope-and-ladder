import React, { Component, Fragment } from 'react';
import { MDCTextField } from '@material/textfield/index';

import './Email/Email.scss'

class Email extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EMAIL: '',
            FNAME: '',
            LNAME: '',
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
        const data = {
            EMAIL: this.state.EMAIL,
            FNAME: this.state.FNAME,
            LNAME: this.state.LNAME
            // status: 'subscribed',
            // merge_fields: {
                // FNAME: this.state.name,
                // LNAME: this.state.name
            // }
        }
        data.formDataNameOrder = JSON.stringify(data);
        return data;
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({ submitting: true })
        const data = this.getFormData();
    
        // let encoded = Object.keys(data).map(function(k) {
        //     return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        // }).join('&')

        // const url = 'https://script.google.com/macros/s/AKfycbx0hWsJBWiSzDOIAzJldsRg0wdj7NwwtFO6vFNDS_cqbKAbvtQe/exec'
        // const listId = '9e67587f52'
        const url = 'https://ropeandladder.us4.list-manage.com/subscribe/post-json?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca&amp;c=?'
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        xhr.send(data)
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
        const emailValid = this.state.EMAIL.includes('@') && this.state.EMAIL.includes('.')
        const canSubmit = !!this.state.FNAME && !!this.state.LNAME && emailValid
        return (
        <div className='email-container'>
            {this.state.submitted || this.state.submitting ? <h1 className='call-to-action-instructions text-center'>Thanks. We'll be in touch soon.</h1> :
            <Fragment>
                <div className='sign-up-text'>
                    <p>SIGN UP TO RECEIVE ALBUM UPDATES</p>
                    <p>AND TO ACCESS THE FIRST FIVE SONGS ON THE RECORD</p>
                </div>
                <div id="mc_embed_signup">
                    <form action="https://ropeandladder.us4.list-manage.com/subscribe/post?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca" target="_blank" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex flex-center input-container" novalidate>
                        <div className="mdc-text-field">
                            <input type="text" value={this.state.FNAME} name="FNAME" className="mdc-text-field__input"  id="mce-FNAME" onChange={this.onTextChange} />
                            <label className="mdc-floating-label" htmlFor="mce-FNAME">First Name </label>
                            <div className="mdc-line-ripple" />
                        </div>
                        <div className="mdc-text-field">
                            <input type="text" value={this.state.LNAME} name="LNAME" className="mdc-text-field__input"  id="mce-LNAME" onChange={this.onTextChange} />
                            <label className="mdc-floating-label" htmlFor="mce-LNAME">Last Name </label>
                            <div className="mdc-line-ripple" />
                        </div>
                        <div className="mdc-text-field">
                            <input type="email" value={this.state.EMAIL} name="EMAIL" className="mdc-text-field__input" id="mce-EMAIL" onChange={this.onTextChange} />
                            <label className="mdc-floating-label" htmlFor="mce-EMAIL">Email Address </label>
                            <div className="mdc-line-ripple" />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_929e4d360b1bc0291a85bc367_51f155eaca" tabindex="-1" value="" /></div>
                        <input disabled={!canSubmit} type='submit' value={this.state.submitting ? 'Signing up...' : 'Subscribe'} name="subscribe" id="mc-embedded-subscribe" className="mdc-button mdc-button--raised subscribe" />
                    </form>
                </div>


                    {/*<div>
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
                        </div>*/}
            </Fragment>}
            </div>
        )
    }
}

export default Email;
