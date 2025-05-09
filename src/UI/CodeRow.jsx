import ColourPeg from "./ColourPeg";
import HelperPeg from "./HelperPeg";

function CodeRow({
  codes = [0, 0, 0, 0],
  states = [0, 0, 0, 0],
  activeIndex = -1,
  currentRow = false,
}) {
  return (
    <div
      className={`flex items-center justify-around rounded-xl p-2 ${currentRow ? "bg-slate-200" : ""}`}
    >
      <div id="codes" className="flex justify-center gap-2">
        {codes.map((code, i) => (
          <ColourPeg key={i} active={activeIndex === i} code={code} />
        ))}
      </div>
      <div id="pegs" className="grid grid-cols-2 gap-1">
        {states.map((s, i) => (
          <HelperPeg key={i} state={s} />
        ))}
      </div>
    </div>
  );
}

export default CodeRow;
