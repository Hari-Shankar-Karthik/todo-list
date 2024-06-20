import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default function ToDoItem({ toDo, toggleTaskDone, removeTask }) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => toggleTaskDone(toDo.id)}>
        <Checkbox
          inputProps={{ "aria-label": "controlled" }}
          checked={toDo.isCompleted}
          sx={{ flex: "0 0 50px" }}
          aria-label="task-completed"
        />
        <ListItemText
          sx={{
            textDecoration: toDo.isCompleted ? "line-through" : "normal",
            opacity: toDo.isCompleted ? 0.6 : 1,
            // fontSizeAdjust: toDo.isCompleted ? "regular" : "bold",
          }}
          primary={toDo.task}
        />
      </ListItemButton>
      <IconButton
        onClick={() => removeTask(toDo.id)}
        sx={{ flex: "0 0 50px" }}
        color="error"
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
