import React from "react";
import styled from "styled-components";
import { Field } from "formik";

interface ICheckboxField {
  name: string;
  label: string;
}

const CheckboxField = ({ name, label }: ICheckboxField) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledFieldCheckbox name={name} type="checkbox" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

const StyledFieldCheckbox = styled(Field)`
  height: 20px;
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
`;

export { CheckboxField };
