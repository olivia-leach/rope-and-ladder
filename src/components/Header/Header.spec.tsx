import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { StaticRouter } from 'react-router'
import Header from './Header'

const component = (
  <StaticRouter>
    <Header />
  </StaticRouter>
)

describe('Header', () => {
  it('should match snapshot', () => {
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot when nav is active', () => {
    const { container, getByTestId } = render(component)
    fireEvent.click(getByTestId('menuButton'))
    expect(container).toMatchSnapshot()
  })
})
