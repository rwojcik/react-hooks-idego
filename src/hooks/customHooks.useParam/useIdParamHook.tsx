import { useParams } from "react-router";

const numberRegex = /^[\d]+$/;
type Params = {
  id: string;
};

export const useGetNumberParam = () => {
  const params = useParams<Params>();

  const numberParam = params.id;

  if (numberParam == null || !numberRegex.test(numberParam)) {
    return null;
  }

  return parseInt(numberParam);
};
