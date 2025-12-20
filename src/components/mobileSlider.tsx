import { useState, useEffect } from "react";
import MobileSliderComponents from "./mibileSliderComponents";
import WinnextButton from "./winnextButton";

export default function MobileSlider() {
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    { mobile: "mobile1.png" },
    { mobile: "mobile2.png" },
    { mobile: "mobile3.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // inicia fade-out
      setFade(false);

      setTimeout(() => {
        setIndice((slide) => (slide + 1) % slides.length);
        setFade(true); // fade-in
      }, 2500);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex w-full items-center justify-center flex-col relative">
      {/* Container principal */}
      <div className="w-full relative flex flex-col items-center overflow-hidden">
        
        {/* Imagens com fade */}
        <div className="relative w-full min-h-[500px]">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.mobile}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${
                index === indice ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Texto com fade sincronizado */}
        <div
          style={{ transitionDuration: "2500ms" }}
          className={`container flex transition-opacity ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {MobileSliderComponents()[indice].title}
        </div>

        {/* Botão com fade sincronizado */}
        <div className="absolute bottom-72 w-full flex justify-center">
          <WinnextButton buttonType="XS" fade={fade} />
        </div>
      </div>
    </div>
  );
}
