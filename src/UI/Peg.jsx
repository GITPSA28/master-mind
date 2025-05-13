import {
  BG_COLOURS,
  BORDER_COLOURS,
  BORDER_SIZE,
  PEG_SIZE,
} from "../utils/helper";

function Peg({
  color = "gray",
  size = "large",
  border,
  borderSize = "normal",
  children,
  styleAddOn = " ",
  onClick,
}) {
  let style = `select-none ${onClick ? "cursor-pointer" : ""} flex ${PEG_SIZE[size]} items-center justify-center rounded-full ${BORDER_SIZE[borderSize]} ${BG_COLOURS[color]} ${BORDER_COLOURS[border]} `;
  style += " " + styleAddOn;
  return (
    <div onClick={onClick} className={style}>
      {children}
    </div>
  );
}

export default Peg;
