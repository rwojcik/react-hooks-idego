import React, { useState, useEffect } from "react";
import { getUserData } from "../api/DataService";
import { useParams } from "react-router";

type Params = {
  id: string;
};

export function HelloFunction() {
  const [userName, setUserName] = useState();
  const params = useParams<Params>();

  const numberParam = params.id;

  useEffect(() => {
    if (numberParam != null) {
      getUserData(numberParam).then(userName => {
        setUserName(userName);
      });
    }
  }, []);

  if (userName != null) {
    return <span>Cześć {userName}</span>;
  }

  return <span>Cześć</span>;
}
