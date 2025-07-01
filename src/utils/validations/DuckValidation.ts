import { number, object, string } from "yup";

export const schemaFormDuck = object().shape({
  color: string().required("Requerido"),
  size: string().required("Requerido"),
  price: number()
    .min(0, "Debe ser positivo")
    .required("Requerido")
    .moreThan(0, "Precio debe ser mayor a 0"),
  quantity: number()
    .min(0, "Debe ser positivo")
    .required("Requerido")
    .moreThan(0, "Cantidad debe ser mayor a 0"),
});
