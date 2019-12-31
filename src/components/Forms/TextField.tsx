import React from "react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

import {Label} from "./Label";

interface ITextField {
  name: string;
  label: string;
  isDisabled?: boolean;
}

const TextField = ({ name, label, isDisabled = false }: ITextField) => {
  return (
    <Container>
      <Label label={label} name={name} />
      <StyledField name={name} disabled={isDisabled} />
      <ErrorMessageContainer>
        <ErrorMessage name={name} />
      </ErrorMessageContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
  justify-content: center;
`;

const StyledField = styled(Field)`
  width: 200px;
  height: 20px;
  margin-top: 10px;
  font-size: 15px;
  background-color: ${({ disabled }) => disabled && "lightslategray"};
`;

const ErrorMessageContainer = styled.span`
  position: absolute;
  font-size: 0.7em;
  margin-top: 3px;
  display: block;
  color: red;
`;

export { TextField };
