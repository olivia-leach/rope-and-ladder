import { render, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import EarlyAccess from './EarlyAccess'

afterEach(cleanup)

const mockHistoryPush = jest.fn()

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as object),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

describe('EarlyAccess', () => {
  it('should match snapshot if access code is valid', () => {
    const { container } = render(
      <StaticRouter location={{ search: 'code=1234567890' }}>
        <EarlyAccess />
      </StaticRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot if access code is invalid', () => {
    const { container } = render(
      <StaticRouter location={{ search: 'code=123' }}>
        <EarlyAccess />
      </StaticRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('should navigate home when close button is clicked', () => {
    const { getByTestId } = render(
      <StaticRouter location={{ search: 'code=1234567890' }}>
        <EarlyAccess />
      </StaticRouter>
    )
  
    fireEvent.click(getByTestId('closeButton'))
    expect(mockHistoryPush).toHaveBeenCalledTimes(1)
    expect(mockHistoryPush).toHaveBeenCalledWith('/')
  })

  it('should match snapshot when iframe loads', () => {
    const { container, getByTestId } = render(
      <StaticRouter location={{ search: 'code=1234567890' }}>
        <EarlyAccess />
      </StaticRouter>
    )
    const iframe = getByTestId('bandCampIFrame')
    fireEvent.load(iframe)
    expect(container).toMatchSnapshot()
  })
})
