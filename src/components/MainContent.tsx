import React, { FunctionComponent } from "react";
import styled from "styled-components";
import List from "./List";

const tasks = [
  'abc',
  'asdas',
  'dasd',
  'asdasd',
  'abasdsadc',
  'asdsaabc',
  'fgfgfabc',
  'fgfgfabc',
];

const MainContent:FunctionComponent = () => (
  <MainContentContainer>
    <List tasks={tasks}/>
  </MainContentContainer>
);

const MainContentContainer = styled.div`
  position: relative;
  background-color: #e8e8e8;
  width: 100%;
  height: 100%;
`;

export default MainContent;
