function Peg({
  color = "slate-100",
  size = 9,
  border,
  borderSize = 2,
  children,
  textSize = "lg",
  textColor = "white",
  styleAddOn = " ",
  onClick,
}) {
  let style = `select-none ${onClick ? "cursor-pointer" : ""} flex h-${size} w-${size} items-center justify-center rounded-full border-${borderSize} bg-${color} border-${border} text-${textSize} text-${textColor}`;
  style += " " + styleAddOn;
  return (
    <div onClick={onClick} className={style}>
      {children}
    </div>
  );
}

export default Peg;
