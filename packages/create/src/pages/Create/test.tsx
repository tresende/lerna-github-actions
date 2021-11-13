import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import UserService from '@lerna-github-actions/core/src/services/Products'

import Create from '.'

jest.mock('@lerna-github-actions/core/src/services/Products')

describe('<Create />', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('should render correctly', () => {
    const { container } = render(<Create />)

    screen.getByRole('heading', { name: /create/i })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should call user service on subimit', () => {
    render(<Create />)
    const name = 'IPHONE 13'
    userEvent.type(screen.getByPlaceholderText(/Name/i), name)
    userEvent.click(screen.getByRole('button', { name: /save/i }))

    expect(UserService.save).toBeCalledTimes(1)
  })
})
