import { useState } from "react";
import DesktopSliderComponents from "./desktopSliderComponents";


export default function DesktopSlider() {

    const [indice, setIndice] = useState(0);

    const slides = [
        { desktop: "1.png" },
        { desktop: "2.png" },
        { desktop: "3.png" },
    ];



    function proximoSlide() {
        setIndice((slide) => (slide + 1) % slides.length);
    }

    function slideAnterior() {
        setIndice((slide) => ((slide - 1 + slides.length) % slides.length));
    }

    const currentImage = slides[indice].desktop;

    return (
        <div className="flex  w-full items-center justify-center flex-col relative" >
            <div className=" w-full bg-lime-600 relative flex gap-3 flex-col items-center " >
                <img
                    className="object-cover w-full h-auto absolute"
                    src={currentImage}
                    alt={`Slide ${indice + 1}`}                    
                    />
                
                    {DesktopSliderComponents()[indice].title}
                
            </div>
                <div className="flex top-0 absolute gap-3 w-full justify-center" >
                    <button onClick={slideAnterior}>Previous</button>
                    <button onClick={proximoSlide}>Next</button>
                </div>
        </div>
    );


}