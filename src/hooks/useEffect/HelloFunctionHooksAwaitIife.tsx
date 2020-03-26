import React, { useState, useEffect } from "react";
import { getUserData } from "../api/DataService";

export function HelloFunction() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    (async () => {
      const userName = await getUserData();
      setUserName(userName);
    })();
  }, []);

  if (userName != null) {
    return <span>Cześć {userName}</span>;
  }

  return <span>Cześć</span>;
}
