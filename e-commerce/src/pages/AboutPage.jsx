import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import Brands from "../components/Brands";
import { PlayIcon } from "lucide-react";

const STATS_DATA = [
    {
        id: 1,
        value: "15K",
        label: "Happy Customers",
    },
    {
        id: 2,
        value: "150K",
        label: "Monthly Visitors",
    },
    {
        id: 3,
        value: "15",
        label: "Countries Worldwide",
    },
    {
        id: 4,
        value: "100+",
        label: "Top Partners",
    },
];
const TEAM_MEMBERS = [
    {
        id: 1,
        name: "İhsan Şahin",
        position: "Software Developer",
        img: "/teamuser1.jpg",
    },
    {
        id: 2,
        name: "Gökhan Özdemir",
        position: "Project Manager",
        img: "/teamuser2.jpg",
    },
    {
        id: 3,
        name: "Brooklyn Simmons",
        position: "UI/UX Designer",
        img: "/teamuser3.jpg",
    },
];


function AboutPage() {
    return (
        <>
            <section className="bg-white">
                <div className="layout-flex gap-7 md:flex-row md:justify-between">
                    <div className="flex flex-col w-full items-center  py-36 md:py-0 justify-center md:items-start md:max-w-sm gap-10">
                        <h5 className="hidden md:block text-base text-center">ABOUT COMPANY</h5>
                        <h2 className="text-4xl text-center md:text-5xl md:text-left">ABOUT US</h2>
                        <h4 className="text-xl text-[#737373] font-normal text-center md:text-left">We know how large objects will act, but things on a small scale</h4>
                        <button className="text-white border border-[#23A6F0] bg-[#23A6F0] rounded-sm py-4 px-9 transition-colors duration-300 hover:bg-[#1d91d1] hover:text-white cursor-pointer">Get Quote Now</button>
                    </div>
                    <div className="relative z-0 aspect-[4/5] md:max-w-[50%] ">
                        <img src="/abouthero.png" alt="" className="relative z-10 w-full h-full object-cover" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[10%] left-[10%] w-[80%]" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[2%] left-[2%] w-[10%]" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[40%] right-[2%] w-[5%]" />
                        <div className="absolute aspect-square rounded-full bg-[#977DF4] -z-10 top-[20%] right-[1%] w-[2%]" />
                        <div className="absolute aspect-square rounded-full bg-[#977DF4] -z-10 bottom-[30%] left-[5%] w-[2%]" />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="layout-flex gap-15 md:flex-row items-center md:justify-between py-6">
                    <div className="flex flex-col justify-center items-center gap-6 max-w-2xs md:max-w-sm md:items-start">
                        <p className="text-[#E74040] text-center font-normal md:text-left">Problems trying</p>
                        <h3 className="text-2xl text-center md:text-left">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                    </div>
                    <p className="text-[#737373] font-normal">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center lg:justify-between gap-15 w-full px-9 md:max-w-5xl md:mx-auto md:px-0 py-25 md:py-20">
                    {STATS_DATA.map((data) => (
                        <div key={data.id} className="flex flex-col justify-center items-center">
                            <h1 className="text-6xl leading-20">{data.value}</h1>
                            <h5 className="text-base text-[#737373]">{data.label}</h5>
                        </div>
                    ))
                    }
                </div>
            </section>

            <section className="flex flex-col gap-12 py-20">
                <div className="layout-flex items-center justify-center gap-2.5">
                    <h2 className="text-4xl text-center max-w-2xs sm:max-w-sm">Meet Our Team</h2>
                    <p className="text-[#737373] text-center font-normal max-w-2xs sm:max-w-md md:max-w-lg">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12 px-9 md:max-w-5xl md:mx-auto lg:px-0 sm:gap-5">
                    {TEAM_MEMBERS.map((member) => (
                        <div key={member.id} className="flex flex-col gap-2.5 justify-center items-center sm:w-[calc(50%-15px)] md:w-[30%]">
                            <div className="aspect-[3/2] w-full">
                                <img src={member.img} alt={member.name} className="w-full h-full rounded-sm object-cover object-top" />
                            </div>
                            <div className="flex flex-col items-center w-full font-normal gap-2.5">
                                <h4 className="text-xl font-normal">{member.name}</h4>
                                <p className="text-[#737373] font-normal">{member.position}</p>
                                <div className="flex flex-row items-center justify-center gap-8">
                                    <FaFacebookSquare className="w-6 h-6 text-[#395185] cursor-pointer transition-color duration-200 hover:opacity-70" />
                                    <FaInstagram className="w-6 h-6 cursor-pointer text-[#E51F5A] transition-color duration-200 hover:opacity-70" />
                                    <FaTwitter className="w-6 h-6 text-[#55ACEE] cursor-pointer transition-color duration-200 hover:opacity-70" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#FAFAFA] flex flex-col gap-6 py-20">
                <div className="layout-flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-7 max-w-2xs md:max-w-lg">
                        <h2 className="text-4xl text-center">Big Companies Are Here</h2>
                        <p className="text-center text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
                <Brands />
            </section>

            <section className="bg-[#FAFAFA] flex flex-col gap-6 py-20 md:py-28">
                <div className="layout-flex items-center justify-center">
                    <div className="relative z-0 aspect-square md:aspect-video max-w-4xl rounded-xl md:rounded-md overflow-hidden">
                        <video src="" poster="/aboutvideo.jpg" className="relative z-10 w-full h-full object-cover " />
                        <div className="absolute inset-0 z-20 bg-black/20"></div>
                        <button
                            type="button"
                            aria-label="Play video"
                            className="absolute flex items-center justify-center z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square bg-[#23A6F0] rounded-full w-[10%] md:w-[5%] cursor-pointer transition-colors duration-300 hover:opacity-80">
                            <PlayIcon className="w-1/3 h-1/3 fill-white text-white" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#2A7CC7] flex items-center py-15 md:py-28 lg:py-0">
                <div className="flex flex-col  w-full px-9 md:max-w-5xl md:mx-auto lg:px-0 items-center  text-white py-6 md:py-0 justify-center md:items-start gap-6">
                    <h5 className="text-base text-center">WORK WITH US</h5>
                    <h2 className="text-4xl text-center md:text-5xl md:max-w-2xl md:text-left">Now Let’s grow Yours</h2>
                    <h4 className="text-xl font-normal text-center md:max-w-2xl md:text-left">The gradual accumulation of information about atomic and
                        small-scale behavior during the first quarter of the 20th </h4>
                    <button className="border border-white rounded-md py-4 px-10">
                        BUTTON
                    </button>
                </div>
                <div className="hidden lg:block aspect-[4/5] w-1/3 min-h-[600px]">
                    <img src="/aboutbanner.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </section>

        </>

    )
}
export default AboutPage;




