import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IProps {
    task: string
}

const ListItem:FunctionComponent<IProps> = ({task}) => <Item>{task}</Item>;

const Item = styled.div`
  width: 300px;
  min-width: 300px;
  height: 200px;
  background-color: #ffffff;
  margin: 30px;
`;

export default ListItem;
