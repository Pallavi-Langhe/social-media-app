import "./App.scss";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import Mockman from "mockman-js";

function App() {
  return (
    <>
      {/* <Mockman /> */}
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
