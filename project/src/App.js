import React from "react";
import "./App.css";
// import { getLCP, getFID, getCLS } from "web-vitals";
import Landing from "./pages/Landing/Landing";
import Features from "./pages/Features/Features";
import { GridWrap } from "emotion-flex-grid";

// if (typeof window !== "undefined") {
//   getCLS(console.log);
//   getFID(console.log);
//   getLCP(console.log);

//   const Axe = require("@axe-core/react");
//   Axe(React, 1000);
// }

function App() {
  return (
    <div style={{ backgroundColor: "darkgray" }}>
      <GridWrap maxWidth={1440}>
        <Landing />
        <Features />
      </GridWrap>
    </div>
  );
}

export default App;
