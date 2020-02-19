import React, { useState, useCallback } from "react";

export function ClickCount() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <button onClick={handleClick}>Kliknąłeś {count} raz(y)</button>;
}
