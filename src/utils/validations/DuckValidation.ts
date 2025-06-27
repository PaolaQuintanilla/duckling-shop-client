import { number, object, string } from "yup";

export const schemaFormDuck = object().shape({
  color: string().required("Requerido"),
  size: string().required("Requerido"),
  price: number().min(0, "Debe ser positivo").required("Requerido"),
  quantity: number().min(0, "Debe ser positivo").required("Requerido"),
});
