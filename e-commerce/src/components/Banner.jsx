import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Zoom } from "swiper/modules";

function Banner() {
    return (
        <section>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[#23856D] h-screen overflow-hidden">
                        <div className="layout-flex items-center justify-between gap-10 pt-20 hero:flex-row hero:pt-40 hero:px-0">
                            <div className="flex  flex-col items-center hero:items-start justify-center max-w-sm gap-9 text-white ">
                                <h4 className="text-xl font-normal">SUMMER 2020</h4>
                                <h2 className="text-4xl md:text-6xl text-center hero:text-left leading-tight">Vita Classic
                                    Product</h2>
                                <h4 className="text-xl text-center font-normal hero:text-left">We know how large objects will act, We know how are objects will act, We know</h4>
                                <div className="flex flex-col justify-center items-center hero:flex-row gap-10">
                                    <h3 className="text-2xl">$16.48</h3>
                                    <button className="bg-[#2DC071] text-sm px-10 py-4 rounded-sm hover:bg-emerald-600 hover:cursor-pointer transition-colors">ADD TO CHART</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-end self-end w-full overflow-hidden hero:w-1/2 hero:justify-end">
                                <img
                                    src="/banner.png"
                                    alt="banner"
                                    className="max-h-[450px] hero:max-h-[1000px] max-w-full h-auto w-auto object-cover object-bottom block"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[#23856D] h-screen overflow-hidden">
                        <div className="layout-flex items-center justify-between gap-10 pt-20 hero:flex-row hero:pt-40 hero:px-0">
                            <div className="flex  flex-col items-center hero:items-start justify-center max-w-sm gap-9 text-white ">
                                <h4 className="text-xl font-normal">SUMMER 2020</h4>
                                <h2 className="text-4xl md:text-6xl text-center hero:text-left leading-tight">Vita Classic
                                    Product</h2>
                                <h4 className="text-xl text-center font-normal hero:text-left">We know how large objects will act, We know how are objects will act, We know</h4>
                                <div className="flex flex-col justify-center items-center hero:flex-row gap-10">
                                    <h3 className="text-2xl">$16.48</h3>
                                    <button className="bg-[#2DC071] text-sm px-10 py-4 rounded-sm hover:cursor-pointer  hover:bg-emerald-600 transition-colors">ADD TO CHART</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-end self-end w-full hero:w-1/2 hero:justify-end ">
                                <img src="/banner.png" alt="banner" className="max-h-[450px] hero:max-h-[1000px] w-auto object-cover object-bottom block" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </section>

    );
}
export default Banner;