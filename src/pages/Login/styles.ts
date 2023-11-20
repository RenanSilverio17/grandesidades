import styled from 'styled-components'
import { Theme } from '../../styles/Themes'

export const Container = styled.div`
  max-width: 300px;

  a {
    color: ${Theme.green};
    font-size: 1.5rem;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${Theme.green};
`

export const Form = styled.form`
  width: 100%;

  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Input = styled.input`
  padding: 10px 20px;

  height: 60px;
  color: ${Theme.white};

  background-color: ${Theme.gray80};
  border-radius: 15px;
  border: 2px ${Theme.green};
  box-shadow: 0px 3px 8px ${Theme.gray80};

  font-size: 2rem;
`

export const Span = styled.span`
  justify-self: flex-end;
  font-size: 1rem;
  text-align: end;
`
