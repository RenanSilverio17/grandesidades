import React, { SelectHTMLAttributes } from 'react';
import { Container, Label } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  label?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <>
      <Label>{label}</Label>
      <Container {...rest}>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Container>
    </>
  );
};
