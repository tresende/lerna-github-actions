import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`

export const Label = styled.label`
  font-size: 1.4rem;
`

export const Input = styled.input`
  border: 0;
  padding: 0.6rem 0;
  margin-top: 0.5rem;
  border-bottom: 1px solid lightgray;

  &:focus,
  &:focus {
    outline: none;
  }
`
