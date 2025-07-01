import { render, screen } from "@testing-library/react";
import DuckForm from "../../components/DuckForm/DuckForm";

jest.mock("../../utils/convertColorAndSize", () => ({
  colorOptions: [
    { name: "Rojo", value: "red" },
    { name: "Verde", value: "green" },
  ],
  sizeOptions: [
    { name: "xsmall", value: "xsmall" },
    { name: "small", value: "small" },
  ],
}));

describe("DuckForm", () => {
  it("should render the form correctly", () => {
    render(<DuckForm onSubmit={jest.fn()} />);

    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Tamaño")).toBeInTheDocument();
    expect(screen.getByText("Precio")).toBeInTheDocument();
    expect(screen.getByText("Cantidad")).toBeInTheDocument();
  });
});
