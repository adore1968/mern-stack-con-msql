import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  toggleTaskDoneRequest,
  updateTaskRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export function TaskContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((t) => t.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id != id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        isLoading,
        tasks,
        loadTasks,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
