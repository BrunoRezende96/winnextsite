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
                    <div className="w-[80%] flex flex-col items-center text-center
                    md:w-[60%]
                    
                    ">
                        <h3 className="text-bgSecundary text-sm" >Um pouquinho sobre nós</h3>
                        <h2 className="text-[#114172] font-semibold text-2xl 
                        
                        lg:mb-20
                        
                        " >Como podemos ajudar você a alcançar seus objetivos</h2>
                    </div>

                </div>

                {/*Container do vídeo e do texto*/}
                <div className="container 
                
                md:flex
                md:px-[10%]
                
                ">


                    {/*Vídeo*/}
                    <div className="w-full flex relative justify-center items-cente py-5">
                        
                        <video
                            src="/institucionalWinnextCompany.mp4"
                            className="
                            shadow-sm
                            w-[280px]
                            h-[160px]

                            lg:w-[380px]
                            lg:h-[215px]

                            rounded-md
                            bg-bgPrimary
                            "
                            controls
                        >
                        </video>

                        {/*Overlay*/}
                        <div className="absolute w-[300px] bottom-[-20px] rounded-md px-5 h-36  z-[-1] shadow-md
                        bg-gradient-to-t


                        md2:bottom-12


                        lg:bg-gradient-to-r
                        lg:bottom-[-25px]
                        lg:h-[310px]
                        lg:w-[350px]
                        lg:left-[-20px]
                    

                        from-[#32c685]
                        via-[#0098c0]
                        to-[#0098c0]

                        md:bottom-12

                        " ></div>

                    </div>

                    <p className="w-full px-[10%] text-center text-sm mt-10  text-[#114172]
                    
                    
                    sm:px-[15%]
                    
                    md:w-[100%]
                    md:p-[10px]
                    md:pr-0
                    md:pl-8
                    md:text-right

                    lg:pl-0
                    lg:text-right


                    " >
                        <strong>Na Winnext, as empresas confiam em nós</strong> porque transformamos compromisso em resultados.
                        Entendemos que cada negócio tem objetivos únicos e nossa missão é ajudá-lo a atingir sua meta com precisão e confiança. Combinando experiência, inovação e dedicação, capacitamos nossos parceiros a crescerem e irem mais longe.

                        Com a Winnext ao seu lado, o sucesso não é apenas uma possibilidade — é o resultado.
                    </p>
                </div>


                {/*Botão CTA*/}
                <div className="
                    container w-full flex justify-center px-[10%]
                    md:justify-end 

                ">
                    <div className="my-4
                    
                    lg:relative
                    lg:top-[-40px]
                    ">
                        <div className="bg-bgPrimary p-[2px] rounded-[50px]">
                            <WinnextButton buttonType="XS" />
                        </div>
                    </div>
                </div>


            </section>




            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>{

            }p




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