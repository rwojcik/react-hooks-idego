import React from "react";

export type TypeScriptComponentProps = {
  label: string;
};

export const TypeScriptComponent: React.FC<TypeScriptComponentProps> = ({
  label
}) => {
  return <span>{label}</span>;
};
