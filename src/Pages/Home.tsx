import Cards from "../components/cards"
import Slider from "../components/slides"
import WinnextButton from "../components/winnextButton"

export default function Home() {
    return (
        <div className="top-0 flex flex-col justify-center w-full">
            <div className="flex w-full items-center justify-center flex-col" >
                <div className="w-full" >
                    <Slider />
                    <div className="w-full relative top-[-50px] flex justify-center">
                        <Cards />
                    </div>
                </div>
            </div>

            {/*About Us*/}
            <section
                id="about"
                className="scroll-mt-14 w-full h-auto flex flex-col items-center pt-12"
            >
                {/* Container do Título*/}
                <div className="container w-full flex flex-col items-center">

                    {/* Title & subtitle */}
                    <div className="w-[80%] flex flex-col items-center text-center">
                        <h3 className="text-bgSecundary text-xl" >Companies trust us</h3>
                        <h2 className="text-[#114172] font-semibold text-4xl" >We can help you hit your target.</h2>
                    </div>

                </div>

                {/*Container do vídeo e do texto*/}
                <div className="container">
                    
                


                </div>

            </section>




            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>{

            }




            <div className="bg-cyan-600 h-44 flex items-center justify-center px-8">
                <WinnextButton buttonType="large" />
            </div>

            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <section id="contact"></section>
        </div>
    )
}