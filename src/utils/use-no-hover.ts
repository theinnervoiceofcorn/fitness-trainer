import { useEffect } from "react";

export const useNoHoverOnTouchDevices = () => {
  useEffect(() => {
    const handleTouchStart = () => {
      document.body.classList.add("no-hover");
    };

    const handleMouseMove = () => {
      document.body.classList.remove("no-hover");
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};
