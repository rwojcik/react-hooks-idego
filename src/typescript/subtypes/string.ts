type Height = "high" | "short";

export const getDescription = (height: Height) => {
  switch (height) {
    case "high":
      return "He is really high";
    case "short":
      return "Unfortunately, it's short";
  }
};
