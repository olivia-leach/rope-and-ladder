import React, { useCallback, useState } from 'react';
import { TextField, Button } from '@material-ui/core'

import './Email.scss'

const Email = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [honeyPot, setHoneyPot] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsSubmitted(false)
  }, [])

  const onFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    setIsSubmitted(false)
  }, [])

  const onLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    setIsSubmitted(false)
  }, [])

  const onHoneyPotChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHoneyPot(e.target.value)
  }, [])

    const submitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsSubmitting(true)
      const data: { EMAIL: string, FNAME: string, LNAME: string, formDataNameOrder?: string } = {
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
    }
    data.formDataNameOrder = JSON.stringify(data)

      const url = 'https://ropeandladder.us4.list-manage.com/subscribe/post-json?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca&amp;c=?'
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      xhr.send(JSON.stringify(data))
      xhr.onreadystatechange = function() {
          console.log(xhr.responseText)
          if (xhr.status === 200) {
            setIsSubmitting(false)
            setIsSubmitted(true)
          }
          return;
      }
    }, [])

    const emailValid = email.includes('@') && email.includes('.')
    const canSubmit = !!firstName && !!lastName && emailValid && !honeyPot

    return (
      <div className='email-container dark-section'>
      {isSubmitted || isSubmitting ? <h1 className='call-to-action-instructions text-center'>Thanks. We'll be in touch soon.</h1> :
        <>
          <div className='sign-up-text'>
            <p>SUBSCRIBE TO THE ROPE AND LADDER MAILING LIST</p>
          </div>
          <form action="https://ropeandladder.us4.list-manage.com/subscribe/post?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca" target="_blank" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex flex-center input-container" noValidate onSubmit={submitForm}>
            <TextField
              placeholder='First Name'
              onChange={onFirstNameChange}
              value={firstName}
            />
            <TextField
              placeholder='Last Name'
              onChange={onLastNameChange}
              value={lastName}
            />
            <TextField
              placeholder='Email Address'
              onChange={onEmailChange}
              value={email}
            />
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_929e4d360b1bc0291a85bc367_51f155eaca" tabIndex={-1} value={honeyPot} onChange={onHoneyPotChange} />
            </div>
            <Button
              disabled={!canSubmit}
              variant='contained'
              type='submit'
            >
              {isSubmitting ? 'Signing up...' : 'Subscribe'}
            </Button>
          </form>
        </>}
      </div>
    )
}

export default Email