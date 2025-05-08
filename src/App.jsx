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
            className="w-10/12 border-1 p-5 flex flex-col gap-1 border-gray-300 rounded-xl bg-gray-50"
          >
            <div id="secret-code" className="bg-slate-600 rounded-xl  py-2">
              <div id="codes" className="flex justify-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
                  ?
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-500">
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
                <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-red-500"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-yellow-500"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-green-500"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full border-2 border-slate-500 bg-blue-500"></div>
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
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
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
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
                <div className="w-10 h-10 flex items-center justify-center text-2xl text-gray-100 rounded-full border-2 border-slate-400 bg-slate-100"></div>
              </div>
              <div id="pegs" className="grid grid-cols-2 gap-1">
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border-1 bg-gray-500 border-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
