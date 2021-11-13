import React, { ChangeEvent } from 'react'

import * as S from './styles'

export type TextInputProps = {
  text: string
  value?: string | Date
  type?: 'text' | 'date'
  onChange: (value: string) => void
}

const TextInput = ({ text, value, type = 'text', onChange }: TextInputProps) => {
  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    onChange(currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={text}>{text}</S.Label>
      <S.Input value={(value ?? '') as string} placeholder={text} type={type} onChange={handleChange} name={text} />
    </S.Wrapper>
  )
}

export default TextInput
