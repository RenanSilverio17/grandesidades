import { InputHTMLAttributes } from 'react'

import { cnpj, cpf } from './masks'

import { Container, Label, Message } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  mask?: 'cnpj' | 'phone' | 'cpf' 
  isPasswordWeak?: boolean
  isWrong?: boolean
  maxLength?: number
  isLoading?: boolean
  width?: string
  message?: string
}

export const Input = ({
  label,
  isPasswordWeak,
  isWrong,
  mask,
  maxLength,
  // isLoading,
  width = '275px',
  message,
  ...rest
}: InputProps) => {
  const handleKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
    if (mask === 'cnpj' ) {
      return cnpj(e)
    }
    
    if (mask === 'cpf' ) {
      return cpf(e)
    }

    return false
  }

  return (
    <Container isPasswordWeak={isPasswordWeak} isWrong={isWrong} width={width}>
      <Label>{label}</Label>
      <input maxLength={maxLength} {...rest} onKeyUp={handleKeyUp} />

      <Message>{message}</Message>
    </Container>
  )
}
