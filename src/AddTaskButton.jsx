import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddTaskButton({ handleOpen }) {
  return (
    <Fab
      onClick={handleOpen}
      color="primary"
      aria-label="add-task"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      <AddIcon />
    </Fab>
  );
}
