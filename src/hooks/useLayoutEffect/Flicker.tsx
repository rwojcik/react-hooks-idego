import React, { useState, useEffect } from "react";

export const Flicker = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  // it doesn't flicker due to new react
  return (
    <div onClick={() => setValue(0)}>
      <p>value: {value}</p>
      <button>Update</button>
    </div>
  );
};
