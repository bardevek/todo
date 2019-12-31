import React, { Fragment, FunctionComponent } from "react";
import styled from "styled-components";

import ListItem from "./ListItem";
import { ITask } from "../types";

interface IProps {
  tasks: ITask[];
}

const List: FunctionComponent<IProps> = ({ tasks }) => {
  return (
    <ListContainer>
      {/*TODO: add id as a key*/}
      {tasks.map((task, index) => (
        <ListItem task={task} key={index} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default List;
