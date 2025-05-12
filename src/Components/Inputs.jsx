import Button from "../UI/Button";
import ColourPeg from "../UI/ColourPeg";

function Inputs({ onCodeInput, onEnter, onBackSpace, inputCodes }) {
  const size = 9;
  return (
    <div
      id="inputs"
      className="mt-3 flex w-10/12 items-center justify-center rounded-2xl border-1 border-gray-300 p-2"
    >
      <div
        id="codes"
        className="mx-2 flex w-3/6 flex-wrap items-center justify-center gap-2"
      >
        {inputCodes.map((code) => (
          <ColourPeg
            key={code}
            code={code}
            size={size}
            styleAddOn={`hover:scale-115  transition-all duration-100 ease-linear `}
            textColor={code === 7 ? "black" : "white"}
            onClick={() => onCodeInput(code)}
          />
        ))}
      </div>

      <div id="input-btn" className="flex flex-col gap-2">
        <Button BtnColor={"green"} onClick={onEnter}>
          Check
        </Button>
        <Button BtnColor={"red"} onClick={onBackSpace}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Inputs;
