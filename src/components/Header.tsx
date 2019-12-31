import React, { Component, Fragment } from "react";
import styled from "styled-components";

interface IProps {
  addButtonAction: () => void;
}

const Header = ({ addButtonAction }: IProps) => (
  <HeaderContainer>
    <HeaderTitle>TODO LIST</HeaderTitle>
    <AddButton onClick={addButtonAction}>Add task</AddButton>
  </HeaderContainer>
);

const HeaderTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 15px;
`;

const AddButton = styled.button`
  background-color: white;
  font-size: 1rem;
  width: 100px;
  padding: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e74c3c;
  width: 100%;
  text-align: center;
  height: 150px;
`;

export default Header;
