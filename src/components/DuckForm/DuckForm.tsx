import { useFormik } from "formik";
import { schemaFormDuck } from "../../utils/Validations/LoginValidation";
import type { DuckInput } from "../../utils/types/DuckTypes";

type DuckFormProps = {
  onSubmit: (duck: DuckInput) => void;
  initialValuesEdit?: DuckInput;
  editMode?: boolean;
};

const colorOptions = ["Red", "Yellow", "Black", "Green"];
const sizeOptions = ["XSmall", "Small", "Medium", "Large", "XLarge"];

const DuckForm = ({ onSubmit, editMode, initialValuesEdit }: DuckFormProps) => {
  const initialValues: DuckInput = {
    color: "",
    size: "",
    price: 0,
    quantity: 0,
  };

  const formik = useFormik<DuckInput>({
    initialValues: initialValuesEdit || initialValues,
    validationSchema: schemaFormDuck,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Color */}
      <div>
        <label className="block text-sm font-medium">Color</label>
        <select
          name="color"
          disabled={editMode}
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border rounded px-3 py-2 ${
            editMode ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Selecciona un color</option>
          {colorOptions.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
        {formik.touched.color && formik.errors.color && (
          <p className="text-red-500 text-sm">{formik.errors.color}</p>
        )}
      </div>

      {/* Tamaño */}
      <div>
        <label className="block text-sm font-medium">Tamaño</label>
        <select
          name="size"
          value={formik.values.size}
          disabled={editMode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border rounded px-3 py-2 ${
            editMode ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Selecciona un tamaño</option>
          {sizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {formik.touched.size && formik.errors.size && (
          <p className="text-red-500 text-sm">{formik.errors.size}</p>
        )}
      </div>

      {/* Precio */}
      <div>
        <label className="block text-sm font-medium">Precio</label>
        <input
          type="number"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border rounded px-3 py-2"
        />
        {formik.touched.price && formik.errors.price && (
          <p className="text-red-500 text-sm">{formik.errors.price}</p>
        )}
      </div>

      {/* Cantidad */}
      <div>
        <label className="block text-sm font-medium">Cantidad</label>
        <input
          type="number"
          name="quantity"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full border rounded px-3 py-2"
        />
        {formik.touched.quantity && formik.errors.quantity && (
          <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          {editMode ? "Actualizar Patito" : "Crear Patito"}
        </button>
      </div>
    </form>
  );
};

export default DuckForm;
