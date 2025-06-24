import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-3 shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Duckling Shop</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/almacen" className="hover:underline">
              Almacén
            </Link>
          </li>
          <li>
            <Link to="/tienda" className="hover:underline">
              Tienda
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
