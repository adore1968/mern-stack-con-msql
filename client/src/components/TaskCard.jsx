import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();

  const handleDone = async (id) => {
    await toggleTaskDone(id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-5 flex flex-col gap-2.5">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <span>{task.done ? "✅" : "❌"}</span>
      </header>
      <p className="text-lg">{task.description}</p>
      <span className="text-lg">{task.createdAt}</span>
      <div className="flex flex-col gap-1 text-white">
        <button
          type="button"
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <Link
          className="px-4 py-2 text-center bg-green-500 rounded"
          to={`/edit/${task.id}`}
        >
          Edit
        </Link>
        <button
          type="button"
          className="bg-slate-500 px-4 py-2 rounded"
          onClick={() => handleDone(task.id)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
