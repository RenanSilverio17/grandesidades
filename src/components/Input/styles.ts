import styled from 'styled-components'
import { Theme } from '../../styles/Themes'

type ContainerProps = {
  isPasswordWeak?: boolean
  isWrong?: boolean
  width?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  position: relative;

  input {
    padding: 5px 10px;
    margin-top: 15px;

    height: 45px;
    width: 100%;
    color: ${Theme.white};

    background-color: ${Theme.gray70};

    font-size: 2rem;
    font-weight: 300;

    &:disabled {
      opacity: 0.5;
    }
  }
`

export const Message = styled.span`
  color: ${Theme.red20};
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 150%;
`

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${Theme.white};

  text-transform: uppercase;
`
