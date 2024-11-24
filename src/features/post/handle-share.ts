import { useCallback, useState } from "react";

export const useHandleShare = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleShare = useCallback(async () => {
    try {
      const url = await window.location.href;
      await navigator.clipboard.writeText(url);
      const buff = await navigator.clipboard.readText();
      console.log(isClicked);

      if (url == buff) {
        setIsClicked(true);
      }
    } catch (err) {
      console.log("Ошибка копирования", err);
    }
  }, [isClicked]);
  return { isClicked, handleShare };
};
