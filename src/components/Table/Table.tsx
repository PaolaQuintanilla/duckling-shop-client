import type { Duck } from "../../utils/types/DuckTypes";

type DuckTableProps = {
  ducks: Duck[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const DuckTable = ({ ducks, onEdit, onDelete }: DuckTableProps) => {
  return (
    <table className="min-w-full table-auto border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">ID</th>
          <th className="px-4 py-2 border">Color</th>
          <th className="px-4 py-2 border">Tamaño</th>
          <th className="px-4 py-2 border">Precio</th>
          <th className="px-4 py-2 border">Cantidad</th>
          <th className="px-4 py-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {ducks?.map((duck) => (
          <tr key={duck._id} className="text-center">
            <td className="border px-4 py-2">{duck._id}</td>
            <td className="border px-4 py-2">{duck.color}</td>
            <td className="border px-4 py-2">{duck.size}</td>
            <td className="border px-4 py-2">${duck.price}</td>
            <td className="border px-4 py-2">{duck.quantity}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => onEdit(duck._id)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => onDelete(duck._id)}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DuckTable;
