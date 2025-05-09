import { getColour } from "../utils/helper";
import Peg from "./Peg";

function ColourPeg({
  code,
  size = 9,
  active = false,
  border = "darkBorder",
  text,
  textColor = "white",
}) {
  const color = getColour(code);
  let borderColor = code > 0 ? getColour(border) : getColour("lightBorder");
  if (active) borderColor = "black";
  return (
    <Peg
      color={color}
      size={size}
      border={borderColor}
      textSize="lg"
      textColor={textColor}
    >
      {text}
    </Peg>
  );
}

export default ColourPeg;
