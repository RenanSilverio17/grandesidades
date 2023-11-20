import styled from 'styled-components'
import { Theme } from '../../styles/Themes';

type LoadingProps = {
  color?: string
}

const ColorStyles = {
  red: `
    border: 5px solid ${Theme.red};
    border-color: ${Theme.red} transparent transparent transparent;
  `,
  white: `
    border: 5px solid ${Theme.white};
    border-color: ${Theme.white} transparent transparent transparent;
  `
};

export const Container = styled.div<LoadingProps>`
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 26px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;

    ${({ color }) => color === 'red' ? ColorStyles.red : ColorStyles.white}

    /* border: 5px solid #fff; */
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    /* border-color: #fff transparent transparent transparent; */
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
