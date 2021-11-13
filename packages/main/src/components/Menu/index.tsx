import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

const Nav = () => (
  <S.Wrapper>
    <Link to="/">List</Link>
    <Link to="/Create">Form</Link>
  </S.Wrapper>
)

export default Nav
