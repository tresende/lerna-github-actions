import React, { useState } from 'react'
import ProductService from '@lerna-github-actions/core/src/services/Products'

import * as S from './styles'

const Table = () => {
  let products = ProductService.get()
  const [items, setItems] = useState(products)

  const handleDelete = (index: number) => {
    products = ProductService.remove(index)
    setItems(products)
  }

  return (
    <S.Wrapper>
      <thead>
        <S.TR>
          <S.TH>Name</S.TH>
          <S.TH>Description</S.TH>
          <S.TH>Date</S.TH>
          <S.TH>Actions</S.TH>
        </S.TR>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <S.TR key={index}>
            <S.TD>{item.name}</S.TD>
            <S.TD>{item.description} -</S.TD>
            <S.TD>{item.date}</S.TD>
            <S.TD>
              <S.Button onClick={() => handleDelete(index)}>Remove</S.Button>
            </S.TD>
          </S.TR>
        ))}
      </tbody>
    </S.Wrapper>
  )
}

export default Table
