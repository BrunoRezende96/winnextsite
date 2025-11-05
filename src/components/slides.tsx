import { useState, useEffect } from "react";
import DesktopSlider from "./desktopSlider";
import MobileSlider from "./mobileSlider";

export default function Slider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    console.log("Largura inicial:", window.innerWidth);
    console.log("É mobile?", mediaQuery.matches);

    const handleResize = () => {
      console.log("Mudou para mobile?", mediaQuery.matches);
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    handleResize();

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);



  return (
    <div className="flex w-full items-center justify-center flex-col">
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
    </div>
  );
}
