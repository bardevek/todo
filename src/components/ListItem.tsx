import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { ITask } from "../types";
import { DeleteButton } from "./DeleteButton";

interface IProps {
  task: ITask;
}

const ListItem: FunctionComponent<IProps> = ({ task }) => {
  return (
    <Item>
      <DeleteButton id={task.id}/>
      <h4>{task.title}</h4>
      <p>{task.content}</p>
    </Item>
  );
};

const Item = styled.div`
  width: 300px;
  min-width: 300px;
  height: 200px;
  background-color: #ffffff;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ListItem;
