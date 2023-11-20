// ServicesListStyles.ts
import styled from 'styled-components';
import { Theme } from '../../styles/Themes';

export const Main = styled.main`
  display: flex;
`;

export const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  overflow: auto;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
   display: none; 
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 3.5rem;
    }
  }
`;

export const ServiceItem = styled.div`
  border: 1px solid ${Theme.gray30};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: ${Theme.gray10};
  cursor: pointer;

  h3 {
    color: ${Theme.green};
    margin-bottom: 8px;
  }

  p {
    color: ${Theme.gray80};
  }

  @media (max-width: 460px) {
    h3 {
      font-size: 2.5rem;
    }
  }
`;

export const EmptyListMessage = styled.p`
  color: ${Theme.gray70};
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const Filter = styled.div`
  padding: 10px 0;
`;
