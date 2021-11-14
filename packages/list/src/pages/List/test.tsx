import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import List from '.'

jest.mock('../../components/Table', () => () => <h1>List</h1>)

describe('<Table />', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Should list', () => {
    render(<List />)

    expect(screen.getAllByRole('heading', { name: /list/i }))
  })
})
