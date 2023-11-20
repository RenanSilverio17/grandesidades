// Sidebar.tsx
import React from 'react';
import { Container, Logo } from './styles'; 
import logo from '../../assets/grandes_idades.png'
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="Logo" />

      <Link to="/">Sair</Link>
    </Container>
  );
};


