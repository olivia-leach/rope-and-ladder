import { render } from '@testing-library/react'
import React from 'react'
import ButtonLink from './ButtonLink'

const defaultProps = {
  icon: 'fa fa-shopping-cart',
  label: 'hi there',
  link: 'http://muffinfilms.com/',
  filled: true,
  suppressNewPage: false,
}

describe('ButtonLink', () => {
  it('should match snapshot when filled', () => {
    const { container } = render(<ButtonLink {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot when not filled', () => {
    const { container } = render(<ButtonLink {...defaultProps} filled={false} />)
    expect(container).toMatchSnapshot()
  })

  it('should open links in new tab if suppressNewPage prop is false', () => {
    const { getByTestId, container } = render(<ButtonLink {...defaultProps} />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('buttonLink')).toHaveProperty('target', '_blank')
  })

  it('should open links in same tab if suppressNewPage prop is true', () => {
    const { getByTestId, container } = render(<ButtonLink {...defaultProps} suppressNewPage />)
    expect(container).toMatchSnapshot()
    expect(getByTestId('buttonLink')).toHaveProperty('target', '')
  })
})
