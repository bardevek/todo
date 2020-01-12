import React from "react";
import { ITask } from "../../types";

interface IProps {
  text?: string;
  onClick: Function;
  task: ITask;
}

const SubmitButton = ({ text = "Submit", onClick, task }: IProps) => {
  return (
    <button type="submit" onClick={() => onClick(task)}>
      {text}
    </button>
  );
};

export { SubmitButton };
