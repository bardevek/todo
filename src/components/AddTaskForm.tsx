import * as React from "react";
import { Formik, Field, FormikProps } from "formik";
import styled from "styled-components";
import { TextField } from "./Forms/TextField";
import { TextAreaField } from "./Forms/TextAreaField";
import { SubmitButton } from "./Forms/SubmitButton";
import { useState } from "react";
import { Loader } from "./Loader";
import { ITask } from "../types";
import axios from "../axios-conf";
import { Priority } from "../enums";

interface IProps {
  title?: string;
  onBackdropClick: () => void;
  reFetchTasks: Function;
}

interface IBackdrop {
  shouldCoverForm: boolean;
}

const AddTaskForm = ({ onBackdropClick, reFetchTasks }: IProps) => {
  const [isLoading, setLoading] = useState(false);
  const [shouldBackdropCoverForm, setShouldBackdropCoverForm] = useState(false);

  return (
    <Container>
      <FormContainer>
        <Formik
          initialValues={{ title: "", content: "", id: "" }}
          onSubmit={() => console.log("submit")}
        >
          {({ values }) => {
            const { title, content, id } = values;

            const task: ITask = {
              title: title,
              content: content || "",
              priority: Priority.DEFAULT,
              id: id || ""
            };

            const createTask = async (task: ITask) => {
              setShouldBackdropCoverForm(true);
              setLoading(true);

              await axios.post("/tasks.json", task);

              setLoading(false);
              setShouldBackdropCoverForm(false);
              onBackdropClick();
              reFetchTasks();
            };

            return (
              <Frame>
                <Title>Add new note</Title>
                <TextField name="title" label="Title" />
                <TextAreaField name="content" label="Content" />
                <SubmitButton onClick={createTask} task={task} />
                {isLoading && <Loader />}
              </Frame>
            );
          }}
        </Formik>
      </FormContainer>
      <Backdrop
        onClick={onBackdropClick}
        shouldCoverForm={shouldBackdropCoverForm}
      />
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
  z-index: ${(props: IBackdrop) => (props.shouldCoverForm ? 9999 : 1)};
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
