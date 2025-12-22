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
                        <Cards/>
                    </div>
                </div>
            </div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>{

            }

            


            <div className="bg-cyan-600 h-44 flex items-center justify-center px-8">
                <WinnextButton buttonType="large" />
            </div>

            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
            <div className="bg-lime-300 h-80 mt-12 mb-12" >Teste</div>
        </div>
    )
}