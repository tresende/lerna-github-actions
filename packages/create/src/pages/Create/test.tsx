import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import UserService from '@lerna-github-actions/core/src/services/Products'

import Create from '.'
import { FormProps } from '../../components/Form'

jest.mock('@lerna-github-actions/core/src/services/Products')

jest.mock('../../components/Form', () => ({ onSubmit }: FormProps) => (
  <button onClick={() => onSubmit({})} data-testid="form" />
))

describe('<Create />', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })

  it('Should call user service on subimit', () => {
    render(<Create />)
    userEvent.click(screen.getByTestId('form'))

    expect(UserService.save).toBeCalledTimes(1)
  })
})
