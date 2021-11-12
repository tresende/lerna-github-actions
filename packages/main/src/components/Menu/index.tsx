import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

const Nav = () => (
  <S.Wrapper>
    <Link to="/">Invoices</Link>
    <Link to="/Create">Invoices</Link>
  </S.Wrapper>
)

export default Nav
