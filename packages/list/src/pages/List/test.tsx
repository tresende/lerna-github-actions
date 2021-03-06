import React from 'react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Product } from '@lerna-github-actions/core/src/types/Product'
import { products } from '@lerna-github-actions/core/src/services/Products/mock'

import List from '.'

const mockedGet = jest.fn()
const mockedRemove = jest.fn()

jest.mock('@lerna-github-actions/core/src/services/Products', () => ({
  __esModule: true,
  default: {
    get: () => mockedGet,
    remove: () => mockedRemove
  }
}))

describe('<Table />', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Should render a empty table', () => {
    const data: Product[] = []
    mockedGet.mockImplementationOnce(() => data)
    render(<List />)
    const totalRows = data.length + 1

    expect(screen.getAllByRole('row')).toHaveLength(totalRows)
  })

  it('Should render table with rows', () => {
    mockedGet.mockImplementationOnce(() => products)

    render(<List />)
    const totalRows = products.length + 1

    expect(screen.getAllByRole('row')).toHaveLength(totalRows)
  })

  it('Should call delete row', () => {
    mockedRemove.mockImplementationOnce(() => [])
    mockedGet.mockImplementationOnce(() => products)

    render(<List />)
    userEvent.click(screen.getByRole('button'))
    expect(mockedRemove).toBeCalledTimes(1)
  })
})
