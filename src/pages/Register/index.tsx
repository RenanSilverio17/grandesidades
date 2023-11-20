import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

// import { authStore } from '../../store/authStore'

import { Button } from '../../components/Button/index'
import { Input } from '../../components/Input'

import { Container, Form, Title } from './styles'
import { LoadingSpin } from '../../components/LoadingSpin'
import { Card } from '../../components/Card'
import { Select } from '../../components/Select'


export const Register = () => {
  // const { login } = authStore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [document, setDocument] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState('cliente');
  const [serviceType, setServiceType] = useState('predial');

  function register (email:string, senha: string){
    console.log(email, senha)
    console.log(userType, email, password,serviceType)

  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!email || !password || !name || !document ) {
      return
    }
    try {
      await register(email, password)

      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  const optionUser = ['prestador de serviço', 'cliente'];
  const typeService = ['predial', 'automotivo'];

  return (
    <Card>
      <Container>
        <Title>Cadastro</Title>
        <Form onSubmit={handleLogin}>

          <Select options={optionUser} value={userType} onChange={(e) => setUserType(e.target.value.toLowerCase().replace(/\s+/g, '_'))}/>

          <Input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            mask={userType !== "cliente" ? 'cnpj' : 'cpf'}
            label={userType === "cliente" ? 'CPF' : 'CNPJ'}
            type="text"
            value={document}
            maxLength={25}
            onChange={(e) => setDocument(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {userType !== 'cliente' &&
            <Select label='Serviço' options={typeService} value={serviceType} onChange={(e) => setServiceType(e.target.value.toLowerCase())}/>
          }
        
            

          <Button height="40px" type="submit">
            {isLoading ? <LoadingSpin /> : 'Entrar'}
          </Button>
        </Form>
        <Link to="/login">Já tem conta?</Link>
      </Container>
    </Card>
  )
}
