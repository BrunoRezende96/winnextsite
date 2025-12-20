import WinnextButton from "./winnextButton"




export default function DesktopSliderComponents() {


    const components = [

        {
            title:
                <div id="title" 
                    className=" opacity-90 container p-DPad relative flex flex-col h-[800px]" >

                    <h1 className="
                    
                    *Paddings*
                    px-8
                    text-6xl


                    *Positioning*
                    flex
                    flex-col
                    justify-end


                    *Breakpoints*
                    md:text-[4rem] 
                    leading-[0.9] 
                    w-[80%]
                    

                    *sm BreakPoints*
                    sm:h-[18%]
                    sm:justify-end

                    *md BreakPoints*
                    md:w-[60%]
                    md:justify-end
                    md:text-6xl

                    *lg BreakPoints*
                    lg:mt-16
                    lg:h-[30%] 
                    lg:justify-end
                    lg:text-8xl

                    mid:w-[300px]
                    mid:h-[10%]
                    mid:mb-2
                    mid:text-[2.6rem]
                    mid:justify-center

                    
                    
                    *Height Adjustments*
                    h-[25%]

                    
                    *Font Formatation*
                    font-medium 
                    text-white 
                    left-0

                    ">
                        Go to your next win
                    </h1>

                    <div className=" 

                    flex 
                    px-8
                    

                    *lg BreakPoints*
                    lg:mt-2
                    md:mt-2
                    sm:mt-2


                    " >
                        <WinnextButton
                            buttonType="small" />
                    </div>

                </div>
        },


        {
            title:
                <div className=" container p-DPad relative flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[9rem] leading-[0.9] font-medium text-white top-20 text-right right-0 w-[70%] ">
                        Discover our solutions
                    </h1>
                </div>
        },


        {
            title:
                <div className=" container p-DPad relative items-center flex flex-col h-screen" >

                    <h1 className=" p-DPad absolute text-[7.5rem] leading-[0.9] font-medium text-white top-0 text-center  w-[80%]">
                        Get your success started
                    </h1>
                </div>
        },



    ]
    return components
}