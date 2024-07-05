import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function TasksForm() {
  const { getTask, createTask, updateTask } = useTasks();
  const taskInitialState = {
    title: "",
    description: "",
  };
  const [task, setTask] = useState(taskInitialState);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const task = await getTask(id);
        setTask(task);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="mt-10">
      <Formik
        initialValues={task}
        enableReinitialize
        onSubmit={async (values) => {
          if (id) {
            await updateTask(id, values);
          } else {
            await createTask(values);
          }
          setTask(taskInitialState);
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-zinc-700 max-w-md rounded-md p-5 mx-auto text-white flex flex-col gap-2.5"
          >
            <h1 className="font-bold uppercase text-center text-2xl">
              {id ? "Edit Task" : "New Task"}
            </h1>
            <div>
              <label className="block text-lg mb-0.5">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Write a title"
                value={values.title}
                onChange={handleChange}
                className="px-2 py-1 rounded-sm w-full text-lg text-black"
              />
            </div>
            <div>
              <label className="block text-lg mb-0.5">Description</label>
              <textarea
                name="description"
                placeholder="Write a description"
                value={values.description}
                onChange={handleChange}
                className="px-2 py-1 rounded-sm w-full text-lg resize-none text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`block px-4 py-2 text-lg text-white w-full rounded-md ${
                id ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {id ? "Edit" : isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
