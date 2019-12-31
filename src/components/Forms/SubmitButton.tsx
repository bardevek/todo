import React from "react";
import axios from "../../axios-conf";
import { Priority } from "../../enums";
import { ITask } from "../../types";

interface IProps {
  text?: string;
  values: {
    title: string;
    content?: string;
  };
}

const test = {
  title: "Second title",
  content: "Second content",
  priority: Priority.DEFAULT
};

// {
// title: "First title",
// content: "First content",
// priority: Priority.DEFAULT
// };

// {
//   title: "Second title",
//   content: "Second content",
//   priority: Priority.DEFAULT
// },
// {
//   title: "Third title",
//   content: "Third content",
//   priority: Priority.DEFAULT
// },
// {
//   title: "Fourth title",
//   content: "Fourth content",
//   priority: Priority.DEFAULT
// }

const testOnclick = () => {
  axios.post("/tasks.json", test);
};

const createTask = (task: ITask) => {
  axios.post("/tasks.json", task);
};

const SubmitButton = ({ text = "Submit", values }: IProps) => {
  const { title, content } = values;

  const task: ITask = {
    title: title,
    content: content || "",
    priority: Priority.DEFAULT
  };

  console.log("task", task);

  return (
    <button type="submit" onClick={() => createTask(task)}>
      {text}
    </button>
  );
};

export { SubmitButton };
