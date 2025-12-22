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
                        <h3 className="text-bgSecundary text-xl" >Um poquinho sobre nós</h3>
                        <h2 className="text-[#114172] font-semibold text-2xl" >Como podemos ajudar você a alcançar seus objetivos</h2>
                    </div>

                </div>

                {/*Container do vídeo e do texto*/}
                <div className="container">


                    {/*Vídeo*/}
                    <div className="w-full flex relative justify-center items-cente py-5">
                        <video
                            src="/institucionalWinnextCompany.mp4"
                            className="
                            shadow-sm
                            w-[280px]
                            h-[160px]
                            rounded-md
                            bg-black
                            
                            "
                            controls
                        >
                        </video>

                        {/*Overlay*/}
                        <div className="absolute w-[300px] bottom-[-20px] rounded-md px-5 h-36  z-[-1] shadow-md
                        bg-gradient-to-t
                        from-[#32c685]
                        via-[#0098c0]
                        to-[#0098c0]
                        " ></div>

                    </div>

                    <p className="w-full px-5 flex flex-col items-center text-center text-sm mt-10  text-[#114172]" >
                        <strong>Na Winnext, as empresas confiam em nós</strong> porque transformamos compromisso em resultados.
                        Entendemos que cada negócio tem objetivos únicos e nossa missão é ajudá-lo a atingir sua meta com precisão e confiança. Combinando experiência, inovação e dedicação, capacitamos nossos parceiros a crescerem e irem mais longe.

                        Com a Winnext ao seu lado, o sucesso não é apenas uma possibilidade — é o resultado.
                    </p>
                </div>
                <div className="w-full flex justify-center my-4 ">
                    <div className="bg-bgPrimary p-[2px] rounded-[50px]">
                        <WinnextButton buttonType="XS"/>
                    </div>
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