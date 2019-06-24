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
