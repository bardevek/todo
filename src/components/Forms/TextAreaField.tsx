import * as React from "react";
import { Field } from "formik";
import { Label } from "./Label";
import styled from "styled-components";

interface ITextAreaField {
  label: string;
  name: string;
}

const TextAreaField = ({ label, name }: ITextAreaField) => {
  return (
    <>
      <Label label={label} name={name} />
      <TextArea name="content" component="textarea" rows="10" />
    </>
  );
};

const TextArea = styled(Field)`
  width: 80%;
`;

export { TextAreaField };
