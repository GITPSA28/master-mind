import { COLOURCODE } from "../utils/helper";
import Peg from "./Peg";

function ColourPeg({
  code,
  size = "large",
  active = false,
  border = "darkBorder",
  text,
  styleAddOn,
  onClick,
}) {
  const color = COLOURCODE[code];
  let borderColor = code > 0 ? border : "lightBorder";
  styleAddOn += " text-white";
  if (active) borderColor = "black";
  return (
    <Peg
      styleAddOn={styleAddOn}
      color={color}
      size={size}
      border={borderColor}
      onClick={onClick}
    >
      {text}
    </Peg>
  );
}

export default ColourPeg;
