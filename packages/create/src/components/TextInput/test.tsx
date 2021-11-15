import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react/pure'

import TextInput from '.'

const props = {
  text: 'FAKE',
  value: 'FAKE TEXT',
  onChange: jest.fn()
}

describe('<TextInput />', () => {
  beforeAll(() => {
    render(<TextInput {...props} />)
  })

  it('Should render input text by default', () => {
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')
  })

  it('Should call onChange on type text input', () => {
    const text = 'FAKE'
    const input = screen.getByRole('textbox')
    userEvent.type(input, text)

    expect(props.onChange).toHaveBeenCalledTimes(text.length)
  })

  it('Should call render with label', () => {
    expect(screen.getByText(props.text)).toBeInTheDocument()
    expect(screen).toMatchSnapshot()
  })
})

describe('<TextInput type="date">', () => {
  it('Should render date input', () => {
    render(<TextInput {...props} type="date" text="date" />)

    expect(screen.getByPlaceholderText(/date/i)).toHaveAttribute('type', 'date')
  })
})
