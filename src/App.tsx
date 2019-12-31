import React, { Component, Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { AddTaskForm } from "./components/AddTaskForm";
import axios from "./axios-conf";
import styled from "styled-components";
import { ITask } from "./types";

const App = () => {
  const [showForm, setFormVisibility] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    axios
      .get("https://todo-list-61845.firebaseio.com/tasks.json?print=pretty")
      .then(data => {
        const rawData = data.data;
        const keys = Object.keys(rawData);

        const arr: ITask[] = keys.map(key => rawData[key]);

        setTasks(arr);

        console.log("arr", arr);

        // if (data.data) {
        //   const arrayId = Object.keys(data.data);
        //   setTasks(data.data[arrayId[0]]);
        // }
      });
  }, []);

  const showModal = () => {
    setFormVisibility(true);
  };

  const hideModal = () => {
    setFormVisibility(false);
  };

  console.log("tasks", tasks);

  return (
    <Container>
      {showForm && <AddTaskForm onBackdropClick={hideModal} />}
      <Header addButtonAction={showModal} />
      <MainContent tasks={tasks} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: #e8e8e8;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default App;
