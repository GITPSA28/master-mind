// import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <>
      <div className="app mx-auto flex flex-col max-w-md">
        <nav className="text-gray-800 flex justify-between items-center px-6 py-3 border-b-gray-400 border-b-1 ">
          <div id="streaks">18</div>
          <div id="logo">
            <p className="font-bold text-2xl">Code Chase</p>
          </div>
          <div className="flex gap-4">
            <div id="help-toggle">help</div>
            <div id="options-toggle">options</div>
          </div>
        </nav>
        <main className="flex flex-col items-center mt-4">
          <div
            id="main-container"
            className="w-10/12 border-1 p-5 flex flex-col gap-0.5 border-gray-300 rounded-xl bg-gray-50"
          >
            <div id="secret-code" className="bg-slate-600 rounded-xl  py-2">
              <div id="codes" className="flex justify-center gap-2">
                <div className="w-9 h-9 flex items-center justify-center text-l text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-l text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-l text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-l text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
              </div>
            </div>
            <div id="current-state" className="flex justify-between px-1 my-1">
              <p>
                Attempt : <strong>#</strong>/10
              </p>
              <p>
                Mode: #<strong>Easy</strong>
              </p>
            </div>

            <div
              id="guess-container"
              className="flex justify-around items-center  p-2 rounded-xl"
            >
              <div id="codes" className="flex justify-center gap-2 ">
                <div className="w-9 h-9 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-red-500"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-yellow-500"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-green-500"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-blue-500"></div>
              </div>
              <div id="pegs" className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 border-1 bg-red-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-50 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-50 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
              </div>
            </div>
            <div
              id="guess-container"
              className="flex justify-around items-center bg-slate-200 p-2 rounded-xl"
            >
              <div id="codes" className="flex justify-center gap-2 ">
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
              </div>
              <div id="pegs" className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
              </div>
            </div>
            <div
              id="guess-container"
              className="flex justify-around items-center  p-2 rounded-xl"
            >
              <div id="codes" className="flex justify-center gap-2 ">
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-9 h-9 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
              </div>
              <div id="pegs" className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div
            id="inputs"
            className="mt-3 w-10/12 sm:w-full flex justify-center items-center"
          >
            <div
              id="codes"
              className="mx-2 w-2/4 flex flex-wrap items-center justify-center gap-2 "
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-red-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-green-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-blue-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-yellow-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-orange-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-pink-500"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-white"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center text-2xl rounded-full border-2 border-gray-600 bg-gray-500"></div>
            </div>

            <div id="input-btn" className="flex flex-col gap-2">
              <button className="text-white bg-green-500 h-fit px-2 py-1 sm:px-4 sm:py-2 rounded-md">
                Check
              </button>
              <button className="text-white flex items-center justify-center bg-red-500 h-fit px-2 py-1 sm:px-4 sm:py-2 rounded-md">
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
    </>
  );
}

export default App;
