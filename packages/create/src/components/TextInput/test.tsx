import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import TextInput from '.'

const props = {
  text: '',
  value: 'FAKE TEXT',
  onChange: jest.fn()
}

describe('<TextInput />', () => {
  it('Should render input text by default', () => {
    render(<TextInput {...props} />)

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
  })

  it('Should render date input', () => {
    render(<TextInput {...props} type="date" text="date" />)

    expect(screen.getByPlaceholderText(/date/i)).toHaveAttribute('type', 'date')
  })

  it('Should call onChange on type text input', () => {
    const text = 'FAKE'
    render(<TextInput {...props} />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, text)

    expect(props.onChange).toHaveBeenCalledTimes(text.length)
  })

  it('Should call redenr with label', () => {
    const label = 'FAKE'
    const { container } = render(<TextInput onChange={props.onChange} text={label} />)

    expect(screen.getByText(label)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
