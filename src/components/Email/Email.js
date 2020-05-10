import React, { Component, Fragment } from 'react';
import { TextField, Button, ThemeProvider } from 'rmwc'

import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@rmwc/icon/icon.css';

import './Email.scss'

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

    getFormData() {
        const data = {
            EMAIL: this.state.EMAIL,
            FNAME: this.state.FNAME,
            LNAME: this.state.LNAME
        }
        data.formDataNameOrder = JSON.stringify(data);
        return data;
    }

    submitForm = (e) => {
      e.preventDefault()
      this.setState({ submitting: true })
      const data = this.getFormData();
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
    }


    render() {
        const emailValid = this.state.EMAIL.includes('@') && this.state.EMAIL.includes('.')
        const canSubmit = !!this.state.FNAME && !!this.state.LNAME && emailValid && !this.state.b_929e4d360b1bc0291a85bc367_51f155eaca
        return (
        <div className='email-container dark-section'>
            {this.state.submitted || this.state.submitting ? <h1 className='call-to-action-instructions text-center'>Thanks. We'll be in touch soon.</h1> :
            <ThemeProvider options={{ primary: '#dd7d45', secondary: '#dd7d45' }}>
                <div className='sign-up-text'>
                  <p>SUBSCRIBE TO THE ROPE AND LADDER MAILING LIST</p>
                </div>
                <form action="https://ropeandladder.us4.list-manage.com/subscribe/post?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca" target="_blank" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex flex-center input-container" noValidate>
                  <TextField
                    label='First Name'
                    name='FNAME'
                    onChange={this.onTextChange}
                    value={this.state.FNAME}
                  />
                  <TextField
                    label='Last Name'
                    name='LNAME'
                    onChange={this.onTextChange}
                    value={this.state.LNAME}
                  />
                  <TextField
                    label='Email Address'
                    name='EMAIL'
                    onChange={this.onTextChange}
                    value={this.state.EMAIL}
                  />
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_929e4d360b1bc0291a85bc367_51f155eaca" tabIndex="-1" value={this.state.HONEYPOT} onChange={this.onTextChange} />
                  </div>
                  <Button disabled={!canSubmit} label={this.state.submitting ? 'Signing up...' : 'Subscribe'} raised type='submit' />
                </form>
              </ThemeProvider>}
            </div>
        )
    }
}

export default Email;
