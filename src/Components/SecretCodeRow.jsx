import ColourPeg from "../UI/ColourPeg";

function SecretCodeRow() {
  return (
    <div id="codes" className="flex justify-center gap-2">
      <ColourPeg text={"?"} code={"darkSlate"} />
      <ColourPeg text={"?"} code={"darkSlate"} />
      <ColourPeg text={"?"} code={"darkSlate"} />
      <ColourPeg text={"?"} code={"darkSlate"} />
    </div>
  );
}

export default SecretCodeRow;
