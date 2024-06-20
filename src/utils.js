import axios from "axios";

const backendURL = "http://localhost:3000";

const fetchToDoList = async () => {
  const response = await axios.get(`${backendURL}/todos`);
  return response.data;
};

const toggleToDo = async (_id) => {
  await axios.put(`${backendURL}/todos/${_id}`);
};

const deleteToDo = async (_id) => {
  await axios.delete(`${backendURL}/todos/${_id}`);
};

const addToDo = async (task) => {
  await axios.post(`${backendURL}/todos`, {
    task,
  });
};

export { fetchToDoList, toggleToDo, deleteToDo, addToDo };
