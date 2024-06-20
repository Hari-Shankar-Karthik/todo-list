import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AddTask from "./AddTask";
import ToDoItem from "./ToDoItem";
import { fetchToDoList } from "./utils";

export default function ToDoList() {
  const [toDoList, setToDoList] = React.useState([]);

  React.useEffect(() => {
    const initializeToDoList = async () => {
      setToDoList(await fetchToDoList());
    };
    initializeToDoList();
  });

  return (
    <Box>
      <Typography align="center" variant="h2" gutterBottom>
        To-Do List
      </Typography>
      <List>
        {toDoList.map((toDo) => (
          <ToDoItem key={toDo._id} toDo={toDo} />
        ))}
      </List>
      <AddTask />
    </Box>
  );
}
