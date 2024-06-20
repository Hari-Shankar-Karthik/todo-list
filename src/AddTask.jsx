import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import AddTaskButton from "./AddTaskButton";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { addToDo } from "./utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddTask() {
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
    setNewTask("");
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <AddTaskButton handleOpen={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add To-Do
            </Typography>
            <form
              onSubmit={async () => {
                await addToDo(newTask);
                handleClose();
              }}
            >
              <TextField
                label="Task"
                variant="standard"
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <IconButton
                  type="button"
                  color="error"
                  aria-label="close"
                  onClick={handleClose}
                  style={{ marginRight: "auto" }}
                >
                  <CloseIcon />
                </IconButton>
                <Button
                  type="submit"
                  color="success"
                  // onClick={async () => {
                  //   await addToDo(newTask);
                  //   handleClose();
                  // }}
                  endIcon={<CheckIcon />}
                  style={{ marginLeft: "auto" }}
                />
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
