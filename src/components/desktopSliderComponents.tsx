import WinnextButton from "./winnextButton"




export default function DesktopSliderComponents() {


    const components = [

        {
            title:
                <div id="title"
                    className=" container p-DPad relative flex flex-col h-screen
                    
                    xl:relative
                    xl:top-16

                    " >

                    <div className="pl-8 w-full h-auto flex justify-start">
                        <h1 className=" w-[50%] text-white font-semibold text-start text-5xl
                        
                        md:w-[40%]
                        md:top-8
                        md:relative

                        lg:text-7xl


                        xl:text-8xl
                        
                        ">
                            Go to your next win
                        </h1>
                    </div>

                    <div className=" p-DPad
                    
                    sm:relative
                    sm:top-[-15px]

                    md:top-0

                    lg:top-3
                    
                    " >
                        <WinnextButton buttonType="XS" />
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen gap-4
                
                
                    xl:relative
                    xl:top-8              
                
                
                " >




                    <div className="w-full flex justify-end " >
                        <h1 className=" w-[70%] text-right text-5xl font-semibold text-white p-DPad


                        sm:relative
                        
                        md:top-9
                        md:relative

                        lg:text-7xl

                        xl:text-8xl
                        
                        
                        ">
                            Discover our solutions
                        </h1>
                    </div>


                    <div className="w-full flex justify-end p-DPad relative bottom-16


                        md:bottom-10
                        md:relative 
                        
                        lg:relative
                        lg:bottom-8
                    
                    ">
                        <WinnextButton buttonType="XS" />
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative items-center gap-4 flex flex-col h-screen
                

                    xl:relative
                    xl:top-16
                
                
                " >

                    <div className="w-full relative flex justify-center top-[-30px]
                    
                    md:top-[-20px]
                    
                    " >
                        <h1 className="  w-[60%] text-5xl text-center font-semibold text-white
                        
                        lg:w-[80%]
                        lg:text-7xl

                        xl:text-8xl
                        xl:relative
                        xl:bottom-10

                        ">
                            Get your success started
                        </h1>
                    </div>

                    <div className="w-full flex relative  top-[-40px] justify-center
                    
                    md:top-[-20px]

                    xl:relative
                    xl:top-[-70px]
                    
                    ">
                        <WinnextButton buttonType="XS" />
                    </div>
                </div>
        },



    ]
    return components
}