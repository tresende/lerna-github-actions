import React, { useState } from 'react'
import { Product } from '@lerna-github-actions/core/src/types/Product'

import TextInput from '../TextInput'

import * as S from './styles'

export type FormProps = {
  onSubmit: (product: Product) => void
}

type FormKeys = 'name' | 'description' | 'photo' | 'date'

const Form = ({ onSubmit }: FormProps) => {
  const [product, setProduct] = useState<Product>()

  const handleChange = (key: FormKeys, value: string | Date) => setProduct({ ...product, [key]: value })

  const handleReset = () => setProduct({})

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    product && onSubmit(product)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={product?.name} label="Name" onChange={(value: string) => handleChange('name', value)} />
      <TextInput
        value={product?.description}
        label="Description"
        onChange={(value: string) => handleChange('description', value)}
      />
      <TextInput
        value={product?.date}
        type="date"
        label="Date"
        onChange={(value: string) => handleChange('date', value)}
      />
      <S.ButtonWrapper>
        <S.Button color="lightgray" onClick={handleReset} type="button">
          Clear
        </S.Button>
        <S.Button color="#ea1d2c" type="submit">
          Save
        </S.Button>
      </S.ButtonWrapper>
    </form>
  )
}

export default Form
