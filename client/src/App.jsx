import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="bg-zinc-950 h-screen">
      <TaskContextProvider>
        <Navbar />
        <div className="container mx-auto px-5">
          <Outlet />
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
