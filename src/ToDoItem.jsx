import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { deleteToDo, toggleToDo } from "./utils";

export default function ToDoItem({ toDo }) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={async () => await toggleToDo(toDo._id)}>
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
        onClick={async () => await deleteToDo(toDo._id)}
        sx={{ flex: "0 0 50px" }}
        color="error"
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
