export type ColorKey = "red" | "green" | "yellow" | "black";
export type SizeKey = "xsmall" | "small" | "medium" | "large" | "xlarge";

export const colorDictionary: Record<"en" | "es", Record<ColorKey, string>> = {
  en: {
    red: "Red",
    green: "Green",
    yellow: "Yellow",
    black: "Black",
  },
  es: {
    red: "Rojo",
    green: "Verde",
    yellow: "Amarillo",
    black: "Negro",
  },
};

export const sizeDictionary: Record<"en" | "es", Record<SizeKey, string>> = {
  en: {
    xsmall: "XSmall",
    small: "Small",
    medium: "Medium",
    large: "Large",
    xlarge: "XLarge",
  },
  es: {
    xsmall: "XPequeño",
    small: "Pequeño",
    medium: "Mediano",
    large: "Grande",
    xlarge: "ExtraGrande",
  },
};
