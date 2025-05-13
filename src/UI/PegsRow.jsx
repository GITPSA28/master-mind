import ColourPeg from "./ColourPeg";

function PegsRow({ codes }) {
  return (
    <div id="codes" className="flex justify-center gap-2">
      {codes.map((code, i) => (
        <ColourPeg key={i} code={code} />
      ))}
    </div>
  );
}

export default PegsRow;
