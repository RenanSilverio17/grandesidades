import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'red' | 'purple'
  width?: string
  height?: string
  isActive?: boolean
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  children,
  width = '100%',
  height = '42px',
  onClick,
  isActive,
  color = 'red',
  disabled
}: ButtonProps) => {
  return (
    <ButtonContainer
      type="submit"
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      isActive={isActive}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}
