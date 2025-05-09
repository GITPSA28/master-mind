import { getColour } from "../utils/helper";
import Peg from "./Peg";

function HelperPeg({ state = 0 }) {
  const colorCode = ["gray", "red", "white"][state];
  const color = getColour(colorCode);
  const border = getColour("darkGray");

  return <Peg color={color} size={3} border={border} borderSize={1} />;
}

export default HelperPeg;
