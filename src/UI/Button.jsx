import { BG_COLOURS } from "../utils/helper";

function Button({
  className,
  children,
  onClick,
  BtnColor,
  textColor = "white",
}) {
  const color = BG_COLOURS[BtnColor];

  return (
    <button
      onClick={onClick}
      className={`flex h-fit cursor-pointer items-center justify-center rounded-md hover:opacity-85 ${color} px-2 py-1 ${textColor === "white" ? "text-white" : "text-black"} sm:px-4 sm:py-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
