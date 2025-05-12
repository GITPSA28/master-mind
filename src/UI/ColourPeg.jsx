import { getColour } from "../utils/helper";
import Peg from "./Peg";

function ColourPeg({
  code,
  size = 9,
  active = false,
  border = "darkBorder",
  text,
  textColor = "white",
  styleAddOn,
  onClick,
}) {
  const color = getColour(code);
  let borderColor = code > 0 ? getColour(border) : getColour("lightBorder");

  if (active) borderColor = "black";
  return (
    <Peg
      styleAddOn={styleAddOn}
      color={color}
      size={size}
      border={borderColor}
      textSize="lg"
      textColor={textColor}
      onClick={onClick}
    >
      {text}
    </Peg>
  );
}

export default ColourPeg;
