import React, { useMemo } from "react";

type SummarizeProps = {
  rows: { value: number }[];
};

const sum = (rows: SummarizeProps["rows"]) =>
  rows.reduce<number>((prev, curr) => prev + curr.value, 0);

export const SummarizeMemo: React.FC<SummarizeProps> = ({ rows }) => {
  const value = useMemo(() => sum(rows), [rows]);

  return <div>sum: {value}</div>;
};
