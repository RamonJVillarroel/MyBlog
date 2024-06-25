import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <Link to="/categoria/myblog">
        <button className="bg-teal-500 text-white py-2 px-4 rounded shadow-md transition duration-300 ease-in-out hover:bg-teal-600">
          Bienvenido a mi Blog, pulsa el botón para iniciar
        </button>
      </Link>
    </div>
  );
}

export default Inicio;
