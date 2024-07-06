import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { isLoading, tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (isLoading) {
      return (
        <div className="text-4xl font-bold text-center text-white">
          <h1>Cargando...</h1>
        </div>
      );
    }

    if (tasks.length === 0)
      return (
        <div className="text-4xl font-bold text-center text-white">
          <h1>No tasks yet</h1>
        </div>
      );

    return (
      <div className="md:grid-cols-3 xl:grid-cols-4 grid grid-cols-2 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10">
      {tasks.length != 0 && (
        <h1 className="mb-5 text-4xl font-bold text-center text-white">
          Tasks
        </h1>
      )}

      {renderMain()}
    </div>
  );
}

export default TasksPage;
