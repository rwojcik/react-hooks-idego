const isNumber = (n: any): n is number => {
  return typeof n === "number";
};

function isString(s : any): s is string {
  return typeof s === "string";
}

const add = (a: any, b: any) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
};
