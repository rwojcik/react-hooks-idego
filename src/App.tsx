import * as React from "react";
import { Flicker } from "./useLayoutEffect/Flicker";
import { NoFlicker } from "./useLayoutEffect/NoFlicker";

export default function App() {
  return (
    <div className="App">
      <div>
        Flicker
        <Flicker />
      </div>
      <div>
        No flicker
        <NoFlicker />
      </div>
    </div>
  );
}
