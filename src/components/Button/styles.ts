import styled from 'styled-components'
import { Theme } from '../../styles/Themes'

type ButtonsProps = {
  color: string
  width?: string
  height?: string
  isActive?: boolean
  disabled?: boolean
}

export const ButtonContainer = styled.button<ButtonsProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: ${Theme.gray70};
  color: ${Theme.white};

  border-radius: 10px;
  transition: 0.2s ease;
  font-size: 1.8rem;
  font-weight: 700;

  text-transform: uppercase;

  opacity: ${({ disabled }) => disabled && '0.4'};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    border: none;
    color: ${({ disabled }) => !disabled && Theme.white};
    background-color: ${Theme.gray30};
  }

`
