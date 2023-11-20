import styled from 'styled-components'
import { Theme } from '../../styles/Themes'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${Theme.green};

  @media (max-width: 950px) {
    flex-direction: column;

    img {
      width: 400px;
    }
  }
  @media (max-width: 768px) {

  }
`
