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
            // ativa o fade-out antes da troca
            setFade(false);
            setTimeout(() => {
                setIndice((slide) => (slide + 1) % slides.length);
                setFade(true);
            }, 2500); // tempo da saída antes da troca
        }, 15000);

        return () => clearInterval(interval);
    });


    function proximoSlide() {
        setIndice((slide) => (slide + 1) % slides.length);
    }

    function slideAnterior() {
        setIndice((slide) => ((slide - 1 + slides.length) % slides.length));
    }

    /*const currentImage = slides[indice].desktop;*/

    return (
        <div className="flex w-full items-center justify-center flex-col relative">
            {/* Container principal do slider */}
            <div className="w-full bg-lime-600 relative flex gap-3 flex-col items-center overflow-hidden">

                {/* Aqui entra a transição suave */}
                <div className="relative w-full h-auto">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.desktop}
                            alt={`Slide ${index + 1}`}
                            className={`absolute w-full h-auto object-cover duration-[2500ms] transition-opacity ease-in-out ${index === indice ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                </div>


                {/* 🔹 Transição suave do conteúdo */}
                <div
                    style={{
                        transitionDuration: "2500ms"
                    }}
                    className={`container flex transition-opacity ease-in-out ${fade ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {DesktopSliderComponents()[indice].title}
                </div>

            </div>

            {/* Botões de navegação */}
            <div className="flex top-0 absolute gap-3 w-full justify-center">
                <button onClick={slideAnterior}>Previous</button>
                <button onClick={proximoSlide}>Next</button>
            </div>
        </div>
    );
}


