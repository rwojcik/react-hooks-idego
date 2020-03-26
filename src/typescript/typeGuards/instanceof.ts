const isError = (n: any): n is Error => {
  return n instanceof Error;
};

const handleError = (e: any) => {
  if (isError(e)) {
    console.log(e.message);
  }
};

// try {
//   throw Error("Testing testing");
// } catch (err) {
//   if (isError(err)) {
//     console.log(err.message);
//   }
//   throw err;
// }

try {
  throw Error("Testing testing");
} catch (err) {
  if (isError(err)) {
    console.log(err.message);
  }
  throw err;
}
