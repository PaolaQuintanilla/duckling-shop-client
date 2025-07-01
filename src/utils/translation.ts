export type ColorKey = "red" | "green" | "yellow" | "black";
export type SizeKey = "XSmall" | "Small" | "Medium" | "Large" | "XLarge";

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
    XSmall: "XSmall",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
    XLarge: "XLarge",
  },
  es: {
    XSmall: "XPequeño",
    Small: "Pequeño",
    Medium: "Mediano",
    Large: "Grande",
    XLarge: "ExtraGrande",
  },
};
