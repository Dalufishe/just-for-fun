import React from "react";

import { css, injectGlobal } from "@emotion/css";
import SpringTest from "./SpringTest";

injectGlobal(`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`);

export default function App() {
  return (
    <div
      className={css(`
      width: 100vw;
      height: 100vh;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      `)}
    >
      <h1
        className={css`
          color: white;
          position: absolute;
          top: 20vh;
          left: 50vw;
          transform: translate(-50%, 0);
        `}
      >
        Click
      </h1>
      <SpringTest />
    </div>
  );
}
