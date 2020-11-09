import React, { useCallback, useState } from 'react'
import { TextField, Button } from '@material-ui/core'

import './Email.scss'

const testProperties = {
  firstName: {
    'data-testid': 'firstNameInput'
  },
  lastName: {
    'data-testid': 'lastNameInput'
  },
  email: {
    'data-testid': 'emailInput'
  }
}

const honeyPotStyles = { position: 'absolute' as const, left: '-5000px' }

const Email = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [honeyPot, setHoneyPot] = useState('')

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    [],
  )

  const onFirstNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value)
    },
    [],
  )

  const onLastNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value)
    },
    [],
  )

  const onHoneyPotChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHoneyPot(e.target.value)
    },
    [],
  )

  const emailValid = email.includes('@') && email.includes('.')
  const canSubmit = !!firstName && !!lastName && emailValid && !honeyPot

  return (
    <div className="email-container dark-section">
      <div className="sign-up-text">
        <p>SUBSCRIBE TO THE ROPE AND LADDER MAILING LIST</p>
      </div>
      <form
        action="https://ropeandladder.us4.list-manage.com/subscribe/post?u=929e4d360b1bc0291a85bc367&amp;id=51f155eaca"
        className="flex flex-center input-container"
        data-testid="emailForm"
        target="_blank"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        noValidate
      >
        <TextField
          color="secondary"
          inputProps={testProperties.firstName}
          label="First Name"
          margin="dense"
          name="FNAME"
          onChange={onFirstNameChange}
          size="small"
          value={firstName}
          variant="filled"
        />
        <TextField
          color="secondary"
          inputProps={testProperties.lastName}
          label="Last Name"
          margin="dense"
          name="LNAME"
          onChange={onLastNameChange}
          size="small"
          value={lastName}
          variant="filled"
        />
        <TextField
          color="secondary"
          inputProps={testProperties.email}
          label="Email Address"
          margin="dense"
          name="EMAIL"
          onChange={onEmailChange}
          size="small"
          value={email}
          variant="filled"
        />
        <div
          style={honeyPotStyles}
          aria-hidden="true"
        >
          <input
            data-testid='honeyPot'
            type="text"
            name="b_929e4d360b1bc0291a85bc367_51f155eaca"
            tabIndex={-1}
            value={honeyPot}
            onChange={onHoneyPotChange}
          />
        </div>
        <Button
          color="secondary"
          data-testid='submitButton'
          disabled={!canSubmit}
          variant="contained"
          size="large"
          type="submit"
        >
          Subscribe
        </Button>
      </form>
    </div>
  )
}

export default Email
