// import { useState } from 'react'
import "./App.css";

import MainContainer from "./Components/MainContainer";
import NavBar from "./Components/NavBar";

import Footer from "./UI/Footer";

function App() {
  return (
    <div className="flex flex-col max-w-md mx-auto app">
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
