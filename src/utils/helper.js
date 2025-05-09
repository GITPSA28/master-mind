export const COLOURS = {
  red: "red-500",
  green: "green-500",
  blue: "blue-500",
  yellow: "yellow-400",
  orange: "orange-500",
  violet: "violet-500",
  white: "white",
  gray: "gray-500",
  darkGray: "gray-600",
  empty: "slate-100",
  lightBorder: "slate-300",
  darkBorder: "slate-500",
  darkSlate: "slate-500",
};
export const COLOURCODE = {
  0: "empty",
  1: "red",
  2: "green",
  3: "blue",
  4: "yellow",
  5: "orange",
  6: "violet",
  7: "white",
  8: "gray",
};

export const getColour = function (code) {
  if (isNaN(code) && code in COLOURS) return COLOURS[code];
  else if (code in COLOURCODE) return COLOURS[COLOURCODE[code]];
  else {
    console.log(code);
    throw new Error("Colour not found");
  }
};
