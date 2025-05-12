import ColourPeg from "../UI/ColourPeg";

function SecretCodeRow() {
  return (
    <div className="rounded-xl bg-slate-600 py-2">
      <div id="codes" className="flex justify-center gap-2">
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
      </div>
    </div>
  );
}

export default SecretCodeRow;
