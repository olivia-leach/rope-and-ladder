import { render } from '@testing-library/react'
import React from 'react'
import Loader from './Loader'

describe('Loader', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })
})
