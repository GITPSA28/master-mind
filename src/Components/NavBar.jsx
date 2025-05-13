import { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import HelperPeg from "../UI/HelperPeg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
  }

  return (
    <nav className="flex items-center justify-between px-6 py-3 text-gray-800 border-b-1 border-b-gray-400">
      {/* <div id="streaks">18</div> */}
      <div id="logo">
        <p className="text-2xl font-bold">Code Chase</p>
      </div>
      <div className="flex gap-4">
        {/* <div id="help-toggle">help</div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="cursor-pointer size-6"
          onClick={() => setIsOpen(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <Modal visible={isOpen} title="How to play">
          <Help close={close} />
        </Modal>
        {/* <div id="options-toggle">options</div> */}
      </div>
    </nav>
  );
}

function Help({ close }) {
  return (
    <div className="space-y-2">
      <p>Mastermind is a code-breaking game:</p>
      <ul className="pl-5 space-y-1 list-disc">
        <li>The computer randomly selects a secret code of 4 colored pegs.</li>
        <li>
          Your goal is to guess the exact colors and positions of the code.
        </li>
        <li>After each guess, you'll receive feedback:</li>
        <div className="flex items-center gap-2 ml-5">
          <div>
            <HelperPeg state={2} />
          </div>{" "}
          =<span>correct color and position</span>
        </div>
        <div className="flex items-center gap-2 ml-5">
          <div>
            <HelperPeg state={1} />
          </div>
          =<span>correct color but wrong position</span>
        </div>
        <li>You have 10 attempts to crack the code.</li>
      </ul>
      <div className="flex justify-end">
        <Button BtnColor={"black"} onClick={close}>
          Got it!
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
