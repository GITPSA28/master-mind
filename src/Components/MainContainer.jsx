import { useEffect, useState } from "react";
import CodeRow from "./CodeRow";
import Inputs from "./Inputs";
import SecretCodeRow from "./SecretCodeRow";
import PegsRow from "../UI/PegsRow";

function MainContainer() {
  const [secret, setSecret] = useState([3, 5, 5, 6]);
  const [inputs, setInputs] = useState([1, 2, 3, 4, 5, 6]);
  const [gameState, setGameState] = useState("inProgress");
  const [rows, setRows] = useState([]);
  const [curRow, setCurRow] = useState([0, 0, 0, 0]);
  const [activeIndex, setActiveIndex] = useState(0);
  function onCodeInput(code) {
    setCurRow((row) => {
      let newRow = [...row];
      newRow[activeIndex] = code;
      return newRow;
    });
    setActiveIndex((i) => (i < curRow.length - 1 ? i + 1 : i));
  }
  function onEnter() {
    if (curRow.findIndex((el) => el === 0) > -1) return;
    const RED = 2;
    const WHITE = 1;
    const EMPTY = 0;
    let states = [];
    let s = [...secret];
    let visited = new Set();
    for (let i = 0; i < curRow.length; i++) {
      if (s[i] === curRow[i]) {
        states.push(RED);
        s[i] = -1;
        visited.add(i);
      }
    }
    for (let i = 0; i < curRow.length; i++) {
      if (visited.has(i)) continue;
      let present = s.findIndex((c) => c === curRow[i]);
      if (present > -1) {
        states.push(WHITE);
        s[present] = -2;
      } else states.push(EMPTY);
    }

    states = states.sort((a, b) => b - a);

    if (states.every((s) => s === RED)) {
      setGameState("win");
      alert("you won");
      return;
    } else {
      setRows((rows) => {
        return [...rows, { row: curRow, states }];
      });
      setCurRow([0, 0, 0, 0]);
      setActiveIndex(0);
    }
  }
  function onBackSpace() {
    setCurRow((row) => {
      let newRow = row.map((color, i) =>
        i === activeIndex || (activeIndex === i + 1 && row[i + 1] === 0)
          ? 0
          : color,
      );
      return [...newRow];
    });
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0);
  }
  function onSetActive(i) {
    console.log(i);
    setActiveIndex(i);
  }

  useEffect(function () {
    let code = [0, 0, 0, 0];
    for (let i = 0; i < code.length; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      code[i] = random;
    }
    console.log(code);
    setSecret(code);
    setInputs([1, 2, 3, 4, 5, 6]);
  }, []);

  return (
    <main className="mt-4 flex flex-col items-center">
      <div
        id="main-container"
        className="flex w-10/12 flex-col gap-0.5 rounded-xl border-1 border-gray-300 bg-gray-50 p-5"
      >
        {gameState === "inProgress" ? (
          <SecretCodeRow />
        ) : (
          <PegsRow codes={secret} />
        )}
        <div id="current-state" className="my-1 flex justify-between px-1">
          <p>
            Attempt : <strong>{rows.length + 1}</strong>/10
          </p>
          <p>
            Mode: <strong>Normal</strong>
          </p>
        </div>
        {rows.map(({ row: codes, states }, i) => {
          return <CodeRow key={i} codes={codes} states={states} />;
        })}
        <CodeRow
          codes={curRow}
          onClick={onSetActive}
          activeIndex={activeIndex}
          currentRow={true}
        />
      </div>
      <Inputs
        inputCodes={inputs}
        onCodeInput={onCodeInput}
        onEnter={onEnter}
        onBackSpace={onBackSpace}
      />
    </main>
  );
}

export default MainContainer;
