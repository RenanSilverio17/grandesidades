import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button/index'
import { Input } from '../../components/Input'

import { Container, Form, Title } from './styles'
import { LoadingSpin } from '../../components/LoadingSpin'
import { Card } from '../../components/Card'
import { Select } from '../../components/Select'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState('');

  function login (email:string, senha: string){
    console.log(email, senha)
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(userType, email, password)

    if (!email || !password) {
      return
    }
    try {
      await login(email, password)

      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  const options = ['prestador de serviço', 'cliente'];

  return (
    <Card>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>

          <Select options={options} value={userType} onChange={(e) => setUserType(e.target.value.toLowerCase().replace(/\s+/g, '_'))}/>
          
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button height="40px" type="submit">
            {isLoading ? <LoadingSpin /> : 'Entrar'}
          </Button>
        </Form>
        <Link to="/register">Não tem conta?</Link>
      </Container>
    </Card>
  )
}
