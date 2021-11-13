import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button<{ color: string }>`
  ${({ color }) => css`
    margin-left: 1rem;
    padding: 1rem 4rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background-color: ${color};
  `}
`
