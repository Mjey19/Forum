import { useCallback, useState } from "react";

export const useHandleShare = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleShare = useCallback(async () => {
    try {
      const url = await window.location.href;
      await navigator.clipboard.writeText(url);
      setIsClicked(true);
    } catch (err) {
      console.log("Ошибка копирования", err);
    }
  }, []);
  return { isClicked, handleShare };
};
