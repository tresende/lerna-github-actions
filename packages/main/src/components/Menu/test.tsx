import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render menu correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change page on click in "form"', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    )

    expect(location.pathname).toBe('/')
    userEvent.click(screen.getByRole('link', { name: /Form/i }))
    expect(location.pathname).toBe('/Create')
  })
})
