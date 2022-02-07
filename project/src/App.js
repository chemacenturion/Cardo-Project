import React from "react";
import "./App.css";
// import { getLCP, getFID, getCLS } from "web-vitals";
import Landing from "./pages/Landing/Landing";
import Features from "./pages/Features/Features";

// if (typeof window !== "undefined") {
//   getCLS(console.log);
//   getFID(console.log);
//   getLCP(console.log);

//   const Axe = require("@axe-core/react");
//   Axe(React, 1000);
// }

function App() {
  return (
    <>
      <Landing />
      <Features />
    </>
  );
}

export default App;
