import React from 'react'
import { render } from '@testing-library/react'

import Component from '.'
import { BrowserRouter } from 'react-router-dom'

describe('<Menu />', () => {
  it('should ...', () => {
    const { container } = render(
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    )
    expect(1).toBe(1)
    expect(container.firstChild).toMatchSnapshot()
  })
})
