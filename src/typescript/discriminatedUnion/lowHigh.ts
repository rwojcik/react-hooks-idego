import { getDescription } from "../subtypes/string";

type HighPerson = {
  height: "high";
  isWindyThere: () => boolean;
};

type ShortPerson = {
  height: "short";
};

type Person = HighPerson | ShortPerson;

export const act = (p: Person) => {
  p.isWindyThere();
  getDescription(p.height);
};
