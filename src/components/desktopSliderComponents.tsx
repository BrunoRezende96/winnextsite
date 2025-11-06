import { useEffect, useState } from "react"
import WinnextButton from "./winnextButton"




export default function DesktopSliderComponents() {


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const components = [

        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[9rem] leading-[0.9] font-medium text-white top-20 left-0 w-[65%]">
                        Go to your next win
                    </h1>

                    <div className="p-DPad bottom-[35%] absolute left-0">
                        <WinnextButton buttonType={width > 1505 ? "large" : "small"}/>
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[9rem] leading-[0.9] font-medium text-white top-20 text-right right-0 w-[70%]">
                        Discover our solutions
                    </h1>

                    <div className="p-DPad bottom-[35%] absolute right-0">
                        <WinnextButton buttonType={width > 1505 ? "large" : "small"}/>
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative items-center flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[7.5rem] leading-[0.9] font-medium text-white top-0 text-center  w-[80%]">
                        Get your success started
                    </h1>

                    <div className="p-DPad top-[30%] absolute">
                        <WinnextButton buttonType={width > 1505 ? "large" : "small"}/>
                    </div>

                </div>
        },



    ]
    return components
}