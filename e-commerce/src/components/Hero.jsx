import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Zoom } from "swiper/modules";
const slides = [
    {
        id: 1,
        subtitle: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale.",
        buttonText: "Shop Now",
        buttonLink: "/shop",
        bgImage: "/hero-blue.jpg"
    },
    {
        id: 2,
        subtitle: "AUTUMN 2020",
        title: "NEW ARRIVALS",
        description: "Explore our latest collection with unique designs for the new season.",
        buttonText: "Explore Now",
        buttonLink: "/shop",
        bgImage: "/hero-blue.jpg"
    },
];
function Hero() {
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
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="bg-[url(/hero-blue.jpg)] bg-cover bg-center bg-no-repeat ">
                            <div className="hero:max-w-5xl hero:m-auto px-9 hero:px-0">
                                <div className="flex  flex-col items-center md:items-start justify-center gap-9 min-h-screen text-white ">
                                    <h5 className="text-base">{slide.subtitle}</h5>
                                    <h1 className="text-4xl md:text-6xl text-center md:text-left">{slide.title}</h1>
                                    <p className="text-xl text-center font-normal max-w-sm md:text-left">{slide.description}</p>
                                    <Link to="/shop" className="bg-[#2DC071] text-2xl px-10 py-4 rounded-sm hover:bg-emerald-600 transition-colors">{slide.buttonText}</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </section >
    );
}
export default Hero;