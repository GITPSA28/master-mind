function Peg({
  color = "slate-100",
  size = 9,
  border,
  borderSize = 2,
  children,
  textSize = "lg",
  textColor = "white",
}) {
  let style = `flex h-${size} w-${size} items-center justify-center rounded-full border-${borderSize} bg-${color} border-${border} text-${textSize} text-${textColor}`;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Peg;
