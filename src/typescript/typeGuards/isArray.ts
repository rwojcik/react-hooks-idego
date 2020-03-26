export const flattenString = (s: string | string[]) => {
  if (Array.isArray(s)) {
    return s.join(", ");
  }
  return s;
};
