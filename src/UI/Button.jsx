import { getColour } from "../utils/helper";

function Button({ children, onClick, BtnColor, textColor = "white" }) {
  const color = getColour(BtnColor);
  return (
    <button
      onClick={onClick}
      className={`flex h-fit items-center justify-center rounded-md bg-${color} px-2 py-1 text-${textColor} sm:px-4 sm:py-2`}
    >
      {children}
    </button>
  );
}

export default Button;
