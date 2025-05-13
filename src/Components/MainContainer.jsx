import { useEffect, useState } from "react";
import CodeRow from "./CodeRow";
import Inputs from "./Inputs";
import SecretCodeRow from "./SecretCodeRow";
import PegsRow from "../UI/PegsRow";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

function MainContainer() {
  const [secret, setSecret] = useState([3, 5, 5, 6]);
  const [inputs, setInputs] = useState([1, 2, 3, 4, 5, 6]);
  const [gameState, setGameState] = useState("inProgress");
  const [rows, setRows] = useState([]);
  const [curRow, setCurRow] = useState([0, 0, 0, 0]);
  const [curState, setCurState] = useState([0, 0, 0, 0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
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
      setCurState(states);
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setModalVisible(true);
      return;
    } else if (rows.length === 9) {
      setGameState("lost");

      setCurState(states);
      setModalVisible(true);
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
  function reset() {
    let code = [0, 0, 0, 0];
    for (let i = 0; i < code.length; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      code[i] = random;
    }
    console.log(code);
    setSecret(code);
    setInputs([1, 2, 3, 4, 5, 6]);
    setRows([]);
    setCurRow([0, 0, 0, 0]);
    setCurState([0, 0, 0, 0]);
    setActiveIndex(0);
    setGameState("inProgress");
    setModalVisible(false);
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
    <main className="flex flex-col items-center mt-4">
      <div
        id="main-container"
        className="shadow-[rgba(0, 0, 0, 0.16)] flex w-10/12 flex-col gap-0.5 rounded-xl p-5 shadow-sm"
      >
        {gameState === "inProgress" ? (
          <div className="py-2 rounded-xl bg-slate-600">
            <SecretCodeRow />
          </div>
        ) : (
          <div className="py-2 rounded-xl bg-slate-300">
            <PegsRow codes={secret} />
          </div>
        )}
        <Modal title="Result" visible={modalVisible}>
          <div className="flex flex-col items-center text-center gap-y-4">
            {gameState === "win" ? (
              <p>
                You guessed in{" "}
                <span className="font-bold">{rows.length + 1}</span> Attempts
              </p>
            ) : (
              <p>You Lost!!</p>
            )}
            <Button
              BtnColor={"black"}
              className="flex gap-5 group w-fit"
              onClick={reset}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="transition-all duration-300 ease-in-out size-6 group-hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              Try Again
            </Button>
          </div>
        </Modal>
        <div id="current-state" className="flex justify-between px-1 my-1">
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
          states={curState}
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
