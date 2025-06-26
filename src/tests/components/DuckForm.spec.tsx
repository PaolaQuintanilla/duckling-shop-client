import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import DuckForm from "../../components/DuckForm/DuckForm";

jest.mock("../../utils/convertColorAndSize", () => ({
  colorOptions: [
    { name: "Rojo", value: "red" },
    { name: "Verde", value: "green" },
  ],
  sizeOptions: [
    { name: "XSmall", value: "xsmall" },
    { name: "Small", value: "small" },
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

  // it("should call onSubmit with correct data when form is submitted", async () => {
  //   const mockOnSubmit = jest.fn();
  //   render(<DuckForm onSubmit={mockOnSubmit} />);

  //   fireEvent.change(screen.getByText("Color"), {
  //     target: { value: "Rojo" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/tamaño/i), {
  //     target: { value: "Small" },
  //   });
  //   fireEvent.change(screen.getByLabelText(/precio/i), {
  //     target: { value: 10 },
  //   });
  //   fireEvent.change(screen.getByLabelText(/cantidad/i), {
  //     target: { value: 5 },
  //   });

  //   fireEvent.click(screen.getByRole("button", { name: /crear patito/i }));

  //   await waitFor(() => {
  //     expect(mockOnSubmit).toHaveBeenCalledWith({
  //       color: "red",
  //       size: "small",
  //       price: 10,
  //       quantity: 5,
  //     });
  //   });
  // });

  // it("should display validation error messages when form is submitted with invalid values", async () => {
  //   render(<DuckForm onSubmit={jest.fn()} />);

  //   fireEvent.click(screen.getByRole("button", { name: /crear patito/i }));

  //   expect(await screen.findByText(/Selecciona un color/i)).toBeInTheDocument();
  //   expect(
  //     await screen.findByText(/Selecciona un tamaño/i)
  //   ).toBeInTheDocument();
  //   expect(
  //     await screen.findByText(/Precio es un campo requerido/i)
  //   ).toBeInTheDocument();
  //   expect(
  //     await screen.findByText(/Cantidad es un campo requerido/i)
  //   ).toBeInTheDocument();
  // });

  // it("should disable inputs in edit mode", () => {
  //   render(<DuckForm onSubmit={jest.fn()} editMode />);

  //   expect(screen.getByLabelText(/color/i)).toBeDisabled();
  //   expect(screen.getByLabelText(/tamaño/i)).toBeDisabled();
  //   expect(screen.getByLabelText(/precio/i)).toBeDisabled();
  //   expect(screen.getByLabelText(/cantidad/i)).toBeDisabled();
  // });
});
