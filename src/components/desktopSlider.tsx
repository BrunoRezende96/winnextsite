import { useState, useEffect } from "react";
import DesktopSliderComponents from "./desktopSliderComponents";

export default function DesktopSlider() {
  const [indice, setIndice] = useState(0);
  const [fade, setFade] = useState(true);

  const slides = [
    { desktop: "1.png" },
    { desktop: "2.png" },
    { desktop: "3.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndice((slide) => (slide + 1) % slides.length);
        setFade(true);
      }, 2500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

//   function proximoSlide() {
//     setIndice((slide) => (slide + 1) % slides.length);
//   }

//   function slideAnterior() {
//     setIndice((slide) => (slide - 1 + slides.length) % slides.length);
//   }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.desktop})` }}
            className={`
              absolute inset-0
              w-full h-full
              bg-cover bg-center bg-no-repeat
              transition-opacity duration-[2500ms] ease-in-out
              ${index === indice ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* CONTEÚDO SOBRE O BACKGROUND */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div
          style={{ transitionDuration: "2500ms" }}
          className={`container transition-opacity ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {DesktopSliderComponents()[indice].title}
        </div>
      </div>

      {/* BOTÕES
      <div className="absolute bottom-6 z-20 flex w-full justify-center gap-4">
        <button
          onClick={slideAnterior}
          className="px-4 py-2 bg-black/60 text-white rounded"
        >
          Previous
        </button>

        <button
          onClick={proximoSlide}
          className="px-4 py-2 bg-black/60 text-white rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}
