import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Drobne opóźnienie, aby upewnić się, że nowa strona się załadowała
  }, [pathname]);

  return null;
};

export default ScrollToTop;
