import styled from 'styled-components'

export const TH = styled.th``
export const TR = styled.tr``

export const TD = styled.td`
  border-bottom: 1px solid #ddd;
`

export const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  ${TR},
  ${TD} {
    font-size: 1.4rem;
    padding: 1rem 0;
    text-align: left;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`
