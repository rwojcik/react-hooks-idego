import { useParams } from "react-router";

const numberRegex = /^[\d]+$/;
type Params = {
  [paramName: string]: string;
};

export const useParamHook = (paramName: string) => {
  const params = useParams<Params>();

  const numberParam = params[paramName];

  if (numberParam == null || !numberRegex.test(numberParam)) {
    return null;
  }

  return parseInt(numberParam);
};