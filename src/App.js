import React from "react";
import { InformativeMesage } from "./components/InformativeMessage/index";
import { Header } from "./components/Header/index";
import { Main } from "./components/Main/index";

function App() {
  return (
    <>
      <InformativeMesage />
      <Header />
      <Main />
    </>
  );
}

export default App;
