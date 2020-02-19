import React, { useState, useLayoutEffect } from "react";

export const NoFlicker = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div onClick={() => setValue(0)}>
      <p>value: {value}</p>
      <button>Update</button>
    </div>
  );
};
