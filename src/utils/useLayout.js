import { useEffect, useState } from "react";

export function useLayout() {
  const [columns, setColmns] = useState();

  let calcWidth = () => {
    if (document.documentElement.clientWidth > 1440) {
      setColmns(6);
    } else if (document.documentElement.clientWidth > 992) {
      setColmns(4);
    } else if (document.documentElement.clientWidth > 768) {
      setColmns(3);
    } else if (document.documentElement.clientWidth < 768) {
      setColmns(1);
    }
  };

  useEffect(() => {
    calcWidth();
    window.addEventListener("resize", calcWidth);
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  return { columns };
}
