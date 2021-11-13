import React from 'react'
import ProductService from '@lerna-github-actions/core/src/services/Products'

import Form from '../../components/Form'

import * as S from './styles'

const Create = () => (
  <S.Wrapper>
    <h1>Create</h1>
    <Form onSubmit={ProductService.save} />
  </S.Wrapper>
)

export default Create
