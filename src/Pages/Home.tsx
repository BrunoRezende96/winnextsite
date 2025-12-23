import Cards from "../components/cards"
import Slider from "../components/slides"
import About from "../sections/About"
import WinnextButton from "../components/winnextButton"
import BannerSlider from "../components/BannerSlider"
import { useState, useEffect } from "react"
import BannerSliderMobile from "../components/BannerSliderMobile"
import Reviews from '../sections/Reviews'







export default function Home() {



    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 421)

        } handleResize()

        window.addEventListener("resize", handleResize)
    }, [])

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
            <About />

            {/*Banner*/}
            <div className="w-full flex justify-center py-36">
                {isMobile? <BannerSliderMobile/> : <BannerSlider/>}
            </div>


            {/*Reviwes*/}
            <div>
                <Reviews/>
            </div>


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