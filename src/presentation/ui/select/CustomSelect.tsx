import React, { useState } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin-top: 0rem;
`;

const StyledSelect = styled.select`
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: var(--a1-primary-color);
`;

interface Props {
  options: string[];
  onSelect: (value: string) => void;
}

export const CustomSelect = ({ options, onSelect }: Props) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <SelectContainer>
      <StyledSelect value={selected} onChange={handleChange}>
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};
