import styled from 'styled-components'
import { Theme } from '../../styles/Themes'

type CardProps = {
  noPadding?: boolean
}

export const Container = styled.div<CardProps>`
  padding: ${({ noPadding }) => (noPadding ? '0' : '40px')};
  border-radius: 20px;
  width: 100%;

  background: ${Theme.gray80};

  span {
    font-size: 18px;
  }
`
