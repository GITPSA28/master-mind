// import { useState } from 'react'
import "./App.css";
import CodeRow from "./UI/CodeRow";
import ColourPeg from "./UI/ColourPeg";
import HelperPeg from "./UI/HelperPeg";
import SecretCodeRow from "./UI/SecretCodeRow";

function App() {
  return (
    <>
      <div className="app mx-auto flex max-w-md flex-col">
        <nav className="flex items-center justify-between border-b-1 border-b-gray-400 px-6 py-3 text-gray-800">
          <div id="streaks">18</div>
          <div id="logo">
            <p className="text-2xl font-bold">Code Chase</p>
          </div>
          <div className="flex gap-4">
            <div id="help-toggle">help</div>
            <div id="options-toggle">options</div>
          </div>
        </nav>
        <main className="mt-4 flex flex-col items-center">
          <div
            id="main-container"
            className="flex w-10/12 flex-col gap-0.5 rounded-xl border-1 border-gray-300 bg-gray-50 p-5"
          >
            <SecretCodeRow />
            <div id="current-state" className="my-1 flex justify-between px-1">
              <p>
                Attempt : <strong>#</strong>/10
              </p>
              <p>
                Mode: #<strong>Easy</strong>
              </p>
            </div>

            <CodeRow codes={[1, 2, 3, 5]} states={[1, 1, 2, 0]} />
            <CodeRow activeIndex={0} currentRow={true} />
          </div>
          <div
            id="inputs"
            className="mt-3 flex w-10/12 items-center justify-center sm:w-11/12"
          >
            <div
              id="codes"
              className="mx-2 flex w-4/6 flex-wrap items-center justify-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-red-500 text-lg text-white sm:h-10 sm:w-10">
                1
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-green-500 text-lg text-white sm:h-10 sm:w-10">
                2
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-blue-500 text-lg text-white sm:h-10 sm:w-10">
                3
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-yellow-400 text-lg text-white sm:h-10 sm:w-10">
                4
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-orange-500 text-lg text-white sm:h-10 sm:w-10">
                5
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-violet-500 text-lg text-white sm:h-10 sm:w-10">
                6
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-white text-lg text-gray-800 sm:h-10 sm:w-10">
                7
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-500 text-lg text-white sm:h-10 sm:w-10">
                8
              </div>
            </div>

            <div id="input-btn" className="flex flex-col gap-2">
              <button className="h-fit rounded-md bg-green-500 px-2 py-1 text-white sm:px-4 sm:py-2">
                Check
              </button>
              <button className="flex h-fit items-center justify-center rounded-md bg-red-500 px-2 py-1 text-white sm:px-4 sm:py-2">
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
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer className="mx-auto mt-8 w-fit text-xs text-gray-500">
        Developed by{" "}
        <a
          className="text-gray-800 underline hover:text-blue-600"
          target="_blank"
          href="https://linkedin.com/in/sunilaravind"
        >
          PSA 28
        </a>
      </footer>
    </>
  );
}

export default App;
