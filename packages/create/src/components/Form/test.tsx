import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react/pure'

import Form from '.'

const props = {
  onSubmit: jest.fn()
}

describe('<Form />', () => {
  it('Should render form onSubmit', () => {
    render(<Form {...props} />)
    const name = 'IPHONE 13'
    const inputName = screen.getByPlaceholderText(/Name/i)
    userEvent.type(screen.getByPlaceholderText(/Name/i), name)
    userEvent.click(screen.getByRole('button', { name: /save/i }))

    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Date/i)).toBeInTheDocument()
    expect(props.onSubmit).toBeCalledTimes(1)
    expect(props.onSubmit).toBeCalledWith({ name })

    userEvent.click(screen.getByRole('button', { name: /clear/i }))

    expect(inputName).toHaveValue('')
  })
})
