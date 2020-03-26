import React from "react";

type ArrayComponentProps = {
  elements: string[];
};

export const ArrayComponent: React.FC<ArrayComponentProps> = ({ elements }) => {
  if (elements.length === 0) {
    return <div>There are no elements!</div>;
  }
  return (
    <>
      {elements.map(e => (
        <div key={e}>{e}</div>
      ))}
    </>
  );
};
