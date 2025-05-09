import ColourPeg from "./ColourPeg";

function SecretCodeRow() {
  return (
    <div className="rounded-xl bg-slate-600 py-2">
      <div id="codes" className="flex justify-center gap-2">
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
        <ColourPeg text={"?"} code={"darkSlate"} />
        {/* <div className="text-l flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-500 text-gray-100">
          ?
        </div>
        <div className="text-l flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-500 text-gray-100">
          ?
        </div>
        <div className="text-l flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-500 text-gray-100">
          ?
        </div>
        <div className="text-l flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-400 bg-slate-500 text-gray-100">
          ?
        </div> */}
      </div>
    </div>
  );
}

export default SecretCodeRow;
