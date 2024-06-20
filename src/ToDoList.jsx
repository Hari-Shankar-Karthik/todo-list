import { v4 as uuid } from "uuid";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const [toDoList, setToDoList] = React.useState([
    {
      id: uuid(),
      task: "solve graph questions on leetcode",
      isCompleted: false,
    },
    {
      id: uuid(),
      task: "make the cricket scorecard using react",
      isCompleted: false,
    },
    {
      id: uuid(),
      task: "make to-do list using react",
      isCompleted: true,
    },
    {
      id: uuid(),
      task: "solve wine fraud project in ai-ml",
      isCompleted: false,
    },
  ]);
  const toggleTaskDone = (id) => {
    setToDoList((toDoList) =>
      toDoList.map((toDo) =>
        toDo.id === id
          ? {
              ...toDo,
              isCompleted: !toDo.isCompleted,
            }
          : toDo
      )
    );
  };
  const removeTask = (id) => {
    setToDoList((toDoList) => toDoList.filter((toDo) => toDo.id !== id));
  };
  const addTask = (newTask) => {
    setToDoList((toDoList) => [
      ...toDoList,
      { id: uuid(), task: newTask, isCompleted: false },
    ]);
  };
  return (
    <Box>
      <Typography align="center" variant="h2" gutterBottom>
        To-Do List
      </Typography>
      <List>
        {toDoList.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
          />
        ))}
      </List>
      <AddTask handleSubmit={addTask} />
    </Box>
  );
}
