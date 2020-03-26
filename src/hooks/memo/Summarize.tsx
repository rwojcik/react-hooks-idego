import React from "react";

type SummarizeProps = {
  rows: { value: number }[];
};

const sum = (rows: SummarizeProps["rows"]) =>
  rows.reduce<number>((prev, curr) => prev + curr.value, 0);

export const Summarize: React.FC<SummarizeProps> = ({ rows }) => {
  const value = sum(rows);

  return <div>sum: {value}</div>;
};
