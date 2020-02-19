import React, { useState } from "react";

export function ClickCount() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return <button onClick={handleClick}>Kliknąłeś {count} raz(y)</button>;
}
