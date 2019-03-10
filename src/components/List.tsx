import React, { Fragment, FunctionComponent } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

interface IProps {
    tasks: string[];
}

const List: FunctionComponent<IProps> = ({tasks}) => {

console.log(tasks);

    return(
        <Fragment>
          <ListRow>
            <ListItem task="1" />
          </ListRow>
          <ListRow>
            <ListItem task="2" />
          </ListRow>
          <ListRow>
            <ListItem task="3" />
          </ListRow>
          <ListRow>
            <ListItem task="4" />
          </ListRow>
        </Fragment>
      );
}


const ListRow = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`;

export default List;
