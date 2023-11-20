import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    img {
      width: 75px;
      height: 75px;
    }
  }
`;

export const Logo = styled.img`
  width: 100px; 
  height: 100px;
  margin-bottom: 20px;
  border-radius: 25%;
`;

