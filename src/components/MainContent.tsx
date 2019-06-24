import React, { FunctionComponent } from "react";
import styled from "styled-components";

import List from "./List";
import {ITask} from "../types"
import { Priority } from "../enums";

const tasks: ITask[] = [
  {
    title:"First title",
    content: "First content",
    priority: Priority.DEFAULT
  },
  {
    title:"Second title",
    content: "Second content",
    priority: Priority.DEFAULT
  },
  {
    title:"Third title",
    content: "Third content",
    priority: Priority.DEFAULT
  },
  {
    title:"Fourth title",
    content: "Fourth content",
    priority: Priority.DEFAULT
  }
];

const MainContent: FunctionComponent = () => (
    <MainContentContainer>
      <List tasks={tasks} />
    </MainContentContainer>

);

const MainContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%
  min-height: calc(100vh - 150px);
  background-color: #e8e8e8;
`;

export default MainContent;
