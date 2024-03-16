import { useEffect, useState } from "react";

type UseDoubleClickHandler = (
  callback: (...args: any) => void,
  delay?: number
) => {
  onDoubleClick: () => void;
};

export const useDoubleClick: UseDoubleClickHandler = (
  callback,
  delay = 300
) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [waitingForSecondClick, setWaitingForSecondClick] =
    useState<boolean>(false);
  let timer: NodeJS.Timeout | undefined;

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (!waitingForSecondClick) {
      setWaitingForSecondClick(true);
      timer = setTimeout(() => {
        if (clickCount === 1) {
          callback();
        }

        setClickCount(0);
        setWaitingForSecondClick(false);
      }, delay);
    } else {
      clearTimeout(timer);
      callback();
      setClickCount(0);
      setWaitingForSecondClick(false);
    }
  };

  return { onDoubleClick: handleClick };
};
