import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";

function App() {
  return (
    <>
      <Header />
      <div className="app-container flex justify-between">
        <div className="left-pane border-r w-6/12 overflow-auto h-[90vh] text-center ">
          <InvoiceForm />
        </div>
        <div className="right-pane w-6/12 text-center">preview</div>
      </div>
    </>
  );
}

export default App;
