import React, { useState, useEffect } from "react";

const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  const message = "Changes you made may not be saved.";
  e.returnValue = message;
  return message;
};

const addBeforeunloadListener = () => {
  window.addEventListener("beforeunload", handleBeforeUnload);
};

const removeBeforeunloadListener = () => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
};

export function BeforeUnload() {
  const [changes, setChanges] = useState([]);

  useEffect(() => {
    if (changes.length > 0) {
      addBeforeunloadListener();
      return () => {
        removeBeforeunloadListener();
      };
    }
  });

  return <form>{/* ... */}</form>;
}
