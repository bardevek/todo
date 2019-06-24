import React, { Fragment, FunctionComponent } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

interface IProps {
  tasks: string[];
}

const List: FunctionComponent<IProps> = ({ tasks }) => {


  return (
    <ListContainer>
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
      <ListItem task="1" />
    </ListContainer>
  );
}


const ListContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default List;
