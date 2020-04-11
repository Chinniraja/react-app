import React from "react";
import logo from "../../logo.svg";

function Page1() {
  return (
      <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white">Page 1</h1>
      </div>
      );
}

export default Page1;
