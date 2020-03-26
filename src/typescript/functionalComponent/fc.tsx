import React from "react";

export const TestComponent = () => <span>Hello world</span>;

export const TypeScriptComponent: React.FC = () => <TestComponent />;

export const TypeScriptComponentChildren: React.FC = ({ children }) => (
  <span>{children}</span>
);

export const ReactNodeInstance = <span />;

export const ReactComponentInstance = <TestComponent />;

export const ReactElementInstance: React.ReactNode =
  <TestComponent /> || <div /> || "string" || 0 || false || null || undefined;
