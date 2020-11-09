import { render } from '@testing-library/react'
import React from 'react'
import CallToAction from './CallToAction'

describe('CallToAction', () => {
  it('should match snapshot', () => {
    const { container } = render(<CallToAction />)
    expect(container).toMatchSnapshot()
  })
})
