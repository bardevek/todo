import React from "react";
import axios from "./../axios-conf";

interface IProps {
  id: string;
}

const DeleteButton = ({ id }: IProps) => {

  const onDelete = async () => {
    await axios.delete(`/tasks/${id}.json`);

  //  add refetch of tasks, I can try with flag in redux

  };

  return <div onClick={onDelete}>X</div>;
};

export { DeleteButton };
