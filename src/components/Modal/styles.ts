// ModalStyles.ts
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  padding: 20px 30px;

  h2 {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  p + p {
    margin-top: 8px;
  }

  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2.5rem;
  cursor: pointer;
  background: none;
  border: none;
  color: #333;

  padding: 10px;
`;

export const ActionButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4caf50; 
  color: #fff; 
  text-decoration: none;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;


export const Contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 10px;
`;

