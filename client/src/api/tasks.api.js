import axios from "axios";

export const getTasksRequest = async () =>
  await axios("http://localhost:3000/api/tasks");

export const getTaskRequest = async (id) =>
  await axios(`http://localhost:3000/api/tasks/${id}`);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:3000/api/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/api/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:3000/api/tasks/${id}`, {
    done,
  });
