import React from 'react'
import { render } from '@testing-library/react'

import List from '.'

describe('<List />', () => {
  it('should ...', () => {
    const { container } = render(<List />)
    expect(1).toBe(1)
    expect(container.firstChild).toMatchSnapshot()
  })
})
