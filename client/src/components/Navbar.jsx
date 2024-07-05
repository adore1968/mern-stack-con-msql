import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-800 flex justify-between px-20 py-5 items-center text-white">
      <Link to="/" className="font-bold text-2xl">
        <h1>React MySQL</h1>
      </Link>
      <ul className="flex gap-2.5 text-lg">
        <li>
          <Link to="/" className="bg-green-500 px-4 py-1.5 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="bg-red-500 px-4 py-1.5 rounded">
            Create task
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
