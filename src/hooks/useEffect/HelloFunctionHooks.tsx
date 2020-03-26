import React, { useEffect } from "react";
import { getUserData } from "../../api/DataService";

export function HelloFunction() {
  useEffect(() => {
    getUserData().then(() => {
      // ...
    });
  });

  return <span>Cześć</span>;
}
