// PresentationPage.tsx
import React from 'react';
import {
  Container,
  HeroOverlay,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  SectionContent,
  CTASection,
  CTAButton,
  Header,
} from './styles'; 
import { Link } from 'react-router-dom';

import logo from '../../assets/grandes_idades.png'


export const HomePage: React.FC = () => {
  return (
    <>
      <Header>
        <HeroOverlay>
          <HeroTitle>Bem-vindo ao Nosso Sistema</HeroTitle>
          <HeroSubtitle>Conectando Serviços de Qualidade aos Nossos Usuários</HeroSubtitle>
        </HeroOverlay>
      
        <img src={logo} width={500} alt="" />
      </Header>
      <Container>

        <Section>
          <SectionTitle>O que fazemos</SectionTitle>
          <SectionContent>
            <p>
              Fornecemos uma plataforma eficiente para encontrar e contratar serviços diversos,
              conectando prestadores de serviços a potenciais clientes. Oferecemos uma ampla gama de serviços,
              desde manutenção predial até aulas particulares, proporcionando uma solução abrangente para suas necessidades.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Nosso Intuito</SectionTitle>
          <SectionContent>
            <p>
              Nosso objetivo é facilitar a busca por serviços de qualidade, promovendo a conexão entre profissionais
              e clientes. Queremos simplificar o processo de contratação, tornando-o mais acessível e eficiente,
              proporcionando uma experiência positiva para ambas as partes envolvidas.
            </p>
          </SectionContent>
        </Section>

        <CTASection>
          <SectionTitle>Faça Parte do Nosso Sistema</SectionTitle>
          <SectionContent>
            <p>
              Cadastre-se agora para começar a utilizar nossos serviços. Seja um cliente em busca de profissionais
              qualificados ou um prestador de serviços desejando oferecer seus talentos ao público.
            </p>
            <CTAButton><Link to="/register">Cadastre-se</Link></CTAButton>
            <CTAButton><Link to="/login">Entrar</Link></CTAButton>
          </SectionContent>
        </CTASection>
      </Container>
    </>
  );
};
