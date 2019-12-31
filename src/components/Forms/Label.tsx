import React from "react";
import styled from "styled-components";

interface ILabel {
  name: string;
  label: string;
}

const Label = ({ name, label }: ILabel) => {
  return <StyledLabel htmlFor={name}>{label}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: block;
  text-align: center;
`;

export { Label };
