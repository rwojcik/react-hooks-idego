import React, { useState, useEffect } from "react";
import { getUserData } from "../../api/DataService";
import { useParamHook } from "./useParamHook";

export function HelloFunction() {
  const [userName, setUserName] = useState();
  const id = useParamHook("id");

  useEffect(() => {
    if (id != null) {
      getUserData(id).then(userName => {
        setUserName(userName);
      });
    }
  }, [id]);

  if (userName != null) {
    return <span>Cześć {userName}</span>;
  }

  return <span>Cześć</span>;
}
