import { ReactNode } from 'react'

import { Container } from './styles'

import logo from '../../assets/grandes_idades.png'
import { Link, useLocation } from 'react-router-dom'

type AppLayoutProps = {
  children: ReactNode
}

export const AppLayoutPublic = ({ children }: AppLayoutProps) => {

  const path = useLocation()

  console.log()
  return (
    <Container>
      {path.pathname !== '/' && <Link to='/'><img src={logo} width={500} alt="" /></Link>}
      <div>{children}</div>
    </Container>
  )
}
