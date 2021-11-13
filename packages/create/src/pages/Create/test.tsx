import React from 'react'
import { render } from '@testing-library/react'

import Create from '.'

describe('<Menu />', () => {
  it('should ...', () => {
    const { container } = render(<Create />)

    expect(1).toBe(1)
    expect(container.firstChild).toMatchSnapshot()
  })
})
