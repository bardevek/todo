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
      {tasks.map(
        task => <ListItem task={task} />
      )}
    </ListContainer>
  );
}


const ListContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default List;
