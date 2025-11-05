import { useState } from "react";
import MobileSliderComponents from "./mibileSliderComponents";
import PrimaryButton from "./primaryButton";



export default function MobileSlider() {

    const [indice, setIndice] = useState(0);

    const slides = [
        { mobile: "mobile1.png" },
        { mobile: "mobile2.png" },
        { mobile: "mobile3.png" },
    ];



    function proximoSlide() {
        setIndice((slide) => (slide + 1) % slides.length);
    }

    function slideAnterior() {
        setIndice((slide) => ((slide - 1 + slides.length) % slides.length));
    }

    const currentImage = slides[indice].mobile;

    return (
        <div className="flex  w-full items-center justify-center flex-col relative" >
            <div className=" w-full bg-lime-600 relative flex gap-3 flex-col items-center " >
                <img
                    className="object-cover w-full h-auto absolute"
                    src={currentImage}
                    alt={`Slide ${indice + 1}`}                    
                    />
                
                    {MobileSliderComponents()[indice].title}

                    <div className="w-full flex justify-center mb-6 z-50 mt-2 top-56 absolute" >
                        <PrimaryButton />
                    </div>
                
            </div>
                <div className="flex top-0 absolute gap-3 w-full justify-center" >
                    <button onClick={slideAnterior}>Previous</button>
                    <button onClick={proximoSlide}>Next</button>
                </div>
        </div>
    );


}