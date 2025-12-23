import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function BannerSlider() {

    const items = [
        { id: 1, img: 'banner1.png' },
        { id: 2, img: 'banner2.png' },
        { id: 3, img: 'banner3.png' },
        { id: 4, img: 'banner4.png' },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000 })]
    );

    return (
        <div className="w-full container flex justify-center overflow-hidden relative" ref={emblaRef}>
            <div className="flex">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex-[0_0_100%]"
                    >
                        <div className='flex w-full justify-center'>
                            <div className='w-[80%]'>
                                <img
                                    src={item.img}
                                    alt="Banner"
                                    className="w-full h-[400px] object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute h-full w-full flex justify-between items-center p-40' >
                <button
                    className='text-white text-3xl hover:text-bgSecundary'
                    onClick={() => emblaApi?.scrollPrev()}>‹</button>
                <button
                    className='text-white text-3xl hover:text-bgSecundary'
                    onClick={() => emblaApi?.scrollNext()}>›</button>
            </div>
        </div>
    );
}
