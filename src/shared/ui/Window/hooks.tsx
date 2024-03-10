import React from "react";
import { DEFAULT_WINDOW_BREAKPOINT } from "./commonProps";

// TODO: Refactor this hook to be more readable
export const useProperties = ({
  width,
  height,
  minWidth,
  minHeight,
  open,
}: {
  width: number | string;
  height: number | string;
  minWidth: number | string;
  minHeight: number | string;
  open: boolean;
}) => {
  const calculateNewProperties = React.useCallback(() => {
    setProperties({
      x:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? 0
          : window.innerWidth / 2 - Number(width) / 2,
      y:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? window.scrollY
          : window.innerHeight / 2 - Number(height) / 2,
      width:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? window.innerWidth
          : width,
      height:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? window.innerHeight
          : height,
      minWidth:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? window.innerWidth
          : minWidth,
      minHeight:
        window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
          ? window.innerHeight
          : minHeight,
    });
  }, [width, height, minWidth, minHeight]);

  React.useEffect(() => {
    if (!open) return;
    calculateNewProperties();

    const handleResize = () => {
      if (window.innerWidth > DEFAULT_WINDOW_BREAKPOINT) {
        document.body.style.overflow = "auto";
        return;
      }
      document.body.style.overflow = "hidden";
      calculateNewProperties();
    };

    if (window.innerWidth < DEFAULT_WINDOW_BREAKPOINT) {
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("scroll", handleResize);
    window.addEventListener("wheel", handleResize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("scroll", handleResize);
      window.removeEventListener("wheel", handleResize);
    };
  }, [width, height, minWidth, minHeight, open, calculateNewProperties]);
  const [properties, setProperties] = React.useState({
    x:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
        ? 0
        : window.innerWidth / 2 - Number(width) / 2,
    y:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
        ? window.scrollY
        : window.innerHeight / 2 - Number(height) / 2,
    width:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT ? window.innerWidth : width,
    height:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
        ? window.innerHeight
        : height,
    minWidth:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
        ? window.innerWidth
        : minWidth,
    minHeight:
      window.innerWidth < DEFAULT_WINDOW_BREAKPOINT
        ? window.innerHeight
        : minHeight,
  });
  return { properties, setProperties };
};
