import Peg from "./Peg";

function HelperPeg({ state = 0 }) {
  const colorCode = ["gray", "white", "red"][state];
  const border = "darkGray";

  return (
    <Peg
      color={colorCode}
      size={"small"}
      border={border}
      borderSize={"small"}
    />
  );
}

export default HelperPeg;
