import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16px;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const Section = styled.div`
  margin-bottom: 40px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

export const CTASection = styled(Section)`
  background-color: #f8f8f8;
  text-align: center;
`;

export const CTAButton = styled.button`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #2b6dcf;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  a {
    padding: 10px 20px;
  }
  
  & + button {
    margin-left: 10px;
    background-color: #444;
  }
`;
