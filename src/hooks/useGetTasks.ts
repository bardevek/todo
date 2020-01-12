import { useEffect, useState } from "react";

import { ITask } from "../types";
import axios from "../axios-conf";

const useGetTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [toggleRequest,setToggleRequest] = useState(false);
  const reFetch = () => {
    setToggleRequest(!toggleRequest);
  };

  useEffect(() => {
    axios.get("/tasks.json").then(data => {
      const rawData = data.data;
      const keys = Object.keys(rawData);
      const arr: ITask[] = keys.map(key => ({
        ...rawData[key],
        id: key
      }));

      setTasks(arr);
    });
  }, [toggleRequest]);

  return { tasks, reFetch };
};

export { useGetTasks };
