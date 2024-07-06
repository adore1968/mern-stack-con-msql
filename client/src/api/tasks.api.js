import axios from "./axios.js";

export const getTasksRequest = async () => await axios("/");

export const getTaskRequest = async (id) => await axios(`/${id}`);

export const createTaskRequest = async (task) => await axios.post("/", task);

export const deleteTaskRequest = async (id) => await axios.delete(`/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`/${id}`, {
    done,
  });
