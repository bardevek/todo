import * as React from "react";
import { Formik, Field, FormikProps } from "formik";
import styled from "styled-components";
import { TextField } from "./Forms/TextField";
import { TextAreaField } from "./Forms/TextAreaField";
import { SubmitButton } from "./Forms/SubmitButton";

interface IProps {
  title?: string;
  onBackdropClick: () => void;
}

const AddTaskForm = ({ onBackdropClick }: IProps) => {
  return (
    <Container>
      <FormContainer>
        <Formik
          initialValues={{ title: "" }}
          onSubmit={() => console.log("submit")}
        >
          {({ values }) => {
            return (
              <Frame>
                <Title>Add new note</Title>
                <TextField name="title" label="Title" />
                <TextAreaField name="content" label="Content" />
                <SubmitButton values={values} />
              </Frame>
            );
          }}
        </Formik>
      </FormContainer>
      <Backdrop onClick={onBackdropClick} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Title = styled.h2`
  display: flex;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: absolute;
  max-height: calc(100vh - 30px);
  width: 70%;
  min-width: 350px;
  display: flex;
  justify-content: center;
  z-index: 100;
  overflow: auto;
  margin-left: 50%;
  transform: translate(-50%, 30px);
`;

const Frame = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  background-color: white;
  min-height: 400px;
  border: black 2px solid;
  display: flex;
  border-radius: 10px;
  overflow: auto;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export { AddTaskForm };
