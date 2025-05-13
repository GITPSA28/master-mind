export const BG_COLOURS = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-400",
  orange: "bg-orange-500",
  violet: "bg-violet-500",
  white: "bg-white",
  gray: "bg-gray-500",
  darkGray: "bg-gray-600",
  empty: "bg-slate-100",
  lightBorder: "bg-slate-300",
  darkBorder: "bg-slate-500",
  darkSlate: "bg-slate-500",
  black: "bg-black",
};

export const PEG_SIZE = {
  small: "h-3 w-3",
  large: "h-9 w-9",
};
export const BORDER_SIZE = {
  small: "border-1",
  normal: "border-2",
};
export const BORDER_COLOURS = {
  red: "border-red-500",
  green: "border-green-500",
  blue: "border-blue-500",
  yellow: "border-yellow-400",
  orange: "border-orange-500",
  violet: "border-violet-500",
  white: "border-white",
  gray: "border-gray-500",
  darkGray: "border-gray-600",
  empty: "border-slate-100",
  lightBorder: "border-slate-300",
  darkBorder: "border-slate-500",
  darkSlate: "border-slate-500",
  black: "border-black",
};

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
  black: "black",
};
export const DARKCOLOURS = {
  red: "red-700",
  green: "green-700",
  blue: "blue-700",
  yellow: "yellow-700",
  orange: "orange-700",
  violet: "violet-700",
  white: "white",
  gray: "gray-700",
  darkGray: "gray-600",
  empty: "slate-100",
  lightBorder: "slate-300",
  darkBorder: "slate-500",
  darkSlate: "slate-500",
  black: "black",
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
export const getDarkColour = function (code) {
  if (isNaN(code) && code in DARKCOLOURS) return DARKCOLOURS[code];
  else if (code in COLOURCODE) return DARKCOLOURS[COLOURCODE[code]];
  else {
    console.log(code);
    throw new Error("Colour not found");
  }
};
