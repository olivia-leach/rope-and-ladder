import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Email from './Email'

describe('Email', () => {
  it('should match snapshot', () => {
    const { container } = render(<Email />)
    expect(container).toMatchSnapshot()
  })

  it('should enable submit button when all required info is supplied w/no honeypot', () => {
    const { getByTestId } = render(<Email />)

    expect(getByTestId('submitButton')).toHaveProperty('disabled', true)

    fireEvent.change(getByTestId('firstNameInput'), { target: { value: 'Bob' }})
    fireEvent.change(getByTestId('lastNameInput'), { target: { value: 'Bobbins' }})
    fireEvent.change(getByTestId('emailInput'), { target: { value: 'bob@bobbins.bob' }})
    expect(getByTestId('submitButton')).toHaveProperty('disabled', false)

    fireEvent.change(getByTestId('honeyPot'), { target: { value: 'delicious' }})
    expect(getByTestId('submitButton')).toHaveProperty('disabled', true)
  })
})
