import { useEffect, useState } from "react";

export const useSessionStorage = (key, initialState) => {
  const get = () => {
    const storage = sessionStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialState;
  };
  const [value, setValue] = useState(get());

  // ? subscribing to any changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};
