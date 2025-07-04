export const colorOptions = [
  { name: "Rojo", value: "red" },
  { name: "Verde", value: "green" },
  { name: "Amarillo", value: "yellow" },
  { name: "Negro", value: "black" },
];

export const sizeOptions = [
  { name: "XPequeño", value: "xsmall" },
  { name: "Pequeño", value: "small" },
  { name: "Mediano", value: "medium" },
  { name: "Grande", value: "large" },
  { name: "ExtraGrande", value: "xlarge" },
];

export const convertToEnglish = (
  color: string,
  size: string,
  toSpanish: boolean = false
): { color: string; size: string } => {
  if (toSpanish) {
    const spanishColor =
      colorOptions.find((c) => c.value === color)?.name ?? color;
    const spanishSize = sizeOptions.find((s) => s.value === size)?.name ?? size;
    return { color: spanishColor, size: spanishSize };
  } else {
    const englishColor =
      colorOptions.find((c) => c.name === color)?.value ?? color;
    const englishSize = sizeOptions.find((s) => s.name === size)?.value ?? size;
    return { color: englishColor, size: englishSize };
  }
};
