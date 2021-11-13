import React, { ChangeEvent } from 'react'

import * as S from './styles'

type TextInputProps = {
  label: string
  value?: string | Date
  type?: 'text' | 'date'
  onChange: (value: string) => void
}

const TextInput = ({ label, value, type = 'text', onChange }: TextInputProps) => {
  const name = label.toLocaleLowerCase().replaceAll(' ', '_')

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    onChange(currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input value={(value ?? '') as string} placeholder={label} type={type} onChange={handleChange} name={name} />
    </S.Wrapper>
  )
}

export default TextInput
