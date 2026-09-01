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
                        <div className="relative overflow-hidden">
                            <img
                                src="/hero-blue.jpg"
                                alt="Hero Background"
                                className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                            />
                            <div className="absolute inset-0 -z-5 bg-black opacity-15"></div>
                            <div className="layout-flex items-center justify-center gap-9 min-h-screen text-white md:items-start">
                                <h5 className="text-base">{slide.subtitle}</h5>
                                <h1 className="text-[4xl] text-center md:text-6xl md:text-left">{slide.title}</h1>
                                <p className="max-w-sm text-center text-xl font-normal md:text-left">{slide.description}</p>
                                <Link
                                    to="/shop"
                                    className="rounded-sm bg-[#2DC071] px-10 py-4 text-2xl transition-colors hover:bg-emerald-600"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </section >
    );
}
export default Hero;