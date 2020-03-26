import React from "react";

export type TypeScriptComponentProps = {
  label?: string;
};

export const TypeScriptComponent: React.FC<TypeScriptComponentProps> = ({
  label = "Hello world"
}) => {
  return <span>{label}</span>;
};

export const HelloComponent: React.FC = () => (
  <TypeScriptComponent />
);

export const TestComponent: React.FC = () => (
  <TypeScriptComponent label="Testing testing" />
);
