import { useEffect, useState } from "react";

const useCounter = (val = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevVal) => prevVal + val * 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return counter;
};

export default useCounter;
