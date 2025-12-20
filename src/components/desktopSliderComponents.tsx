import WinnextButton from "./winnextButton"




export default function DesktopSliderComponents() {


    const components = [

        {
            title:
                <div id="title"
                    className=" container p-DPad relative flex flex-col h-[800px]" >

                    <div className="pl-8 w-full h-auto flex justify-start">
                        <h1 className=" w-[50%] text-white font-semibold text-start text-5xl
                        
                        md:w-[40%]
                        md:top-8
                        md:relative
                        
                        ">
                            Go to your next win
                        </h1>
                    </div>

                    <div className=" p-DPad" >
                        <WinnextButton buttonType="XS" />
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen gap-4" >


                    <div className="w-full flex justify-end " >
                        <h1 className=" w-[50%] text-right text-5xl font-semibold text-white
                        
                        md:top-9
                        md:relative
                        
                        
                        ">
                            Discover our solutions
                        </h1>
                    </div>
                    <div className="w-full flex justify-end
                        md:top-5
                        md:relative                   
                    
                    ">
                        <WinnextButton buttonType="XS" />
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative items-center gap-4 flex flex-col h-screen" >

                    <div className="w-full relative flex justify-center top-[-30px]
                    
                    md:top-[-20px]
                    
                    " >
                        <h1 className="  w-[60%] text-5xl text-center font-semibold text-white">
                            Get your success started
                        </h1>
                    </div>

                    <div className="w-full flex relative  top-[-40px] justify-center
                    
                    md:top-[-20px]
                    
                    ">
                        <WinnextButton buttonType="XS" />
                    </div>
                </div>
        },



    ]
    return components
}