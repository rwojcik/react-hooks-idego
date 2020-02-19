import React, { useState, useEffect } from "react";
import { getUserData } from "../api/DataService";

export function HelloFunction() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    getUserData().then(userName => {
      setUserName(userName);
    });
  }, []);

  if (userName != null) {
    return <span>Cześć {userName}</span>;
  }

  return <span>Cześć</span>;
}
