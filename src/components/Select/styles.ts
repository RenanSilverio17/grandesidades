import { styled } from "styled-components";
import { Theme } from "../../styles/Themes";

export const Container = styled.select`
  padding: 5px 10px;
  height: 45px;
  width: 100%;
  color: ${Theme.white};
  background-color: ${Theme.gray70};
  font-size: 2rem;
  font-weight: 300;
  text-transform: capitalize;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${Theme.white};

  text-transform: uppercase;
`
