import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { AddTaskForm } from "./components/AddTaskForm";
import styled from "styled-components";
import { useGetTasks } from "./hooks/useGetTasks";

const App = () => {
  const [showForm, setFormVisibility] = useState(false);
  const { tasks,reFetch } = useGetTasks();

  const showModal = () => {
    setFormVisibility(true);
  };

  const hideModal = () => {
    setFormVisibility(false);
  };

  return (
    <Container>
      {showForm && <AddTaskForm onBackdropClick={hideModal} reFetchTasks={reFetch}/>}
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
