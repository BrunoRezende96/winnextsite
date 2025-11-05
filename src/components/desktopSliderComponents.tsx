import PrimaryButton from "./primaryButton"



export default function DesktopSliderComponents() {


    const components = [

        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[9rem] leading-[0.9] font-medium text-white top-20 left-0 w-[65%]">
                        Go to your next win
                    </h1>

                    <div className="p-DPad bottom-[35%] absolute left-0">
                        <PrimaryButton />
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
                        <PrimaryButton />
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
                        <PrimaryButton />
                    </div>

                </div>
        },



    ]
    return components
}