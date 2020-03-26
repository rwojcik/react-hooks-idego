import * as React from "react";
import { Flicker } from "./hooks/useLayoutEffect/Flicker";
import { NoFlicker } from "./hooks/useLayoutEffect/NoFlicker";

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
