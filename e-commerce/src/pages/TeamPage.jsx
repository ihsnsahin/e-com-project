import { ChevronRight } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    {
        id: 4,
        name: "Jane Cooper",
        position: "Full Stack Engineer",
        img: "/teamuser4.jpg",
    },
    {
        id: 5,
        name: "Leslie Alexander",
        position: "DevOps Engineer",
        img: "/teamuser5.jpg",
    },
    {
        id: 6,
        name: "Kathryn Murphy",
        position: "Frontend Developer",
        img: "/teamuser6.jpg",
    },
    {
        id: 7,
        name: "Eleanor Pena",
        position: "Product Owner",
        img: "/teamuser7.jpg",
    },
    {
        id: 8,
        name: "Kristin Watson",
        position: "QA Automation Engineer",
        img: "/teamuser8.jpg",
    },
];
function TeamPage() {
    return (
        <>
            <section className="bg-white flex flex-col gap-12 py-12">
                <div className="layout-flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-4 max-w-2xs md:max-w-3xl">
                        <h6 className="text-center text-base text-[#737373]">WHAT WE DO</h6>
                        <h2 className="text-4xl md:text-5xl text-center">Innovation tailored for you</h2>
                        <div className="flex justify-center items-center text-sm">
                            <Link to="/" className="cursor-pointer">Home</Link>
                            <ChevronRight className="w-4 h-4 text-[#BDBDBD]" />
                            <h6 className="text-[#737373]">Team</h6>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="aspect-[4/5] sm:aspect-[4/3] sm:w-1/2 overflow-hidden group">
                        <img src="/teamhero1.jpg" alt="teamhero1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex sm:flex-col gap-1 sm:w-1/4 ">
                        <div className="aspect-[4/5] sm:aspect-[4/3] w-1/2 sm:w-full sm:h-1/2 overflow-hidden group">
                            <img src="/teamhero2.jpg" alt="teamhero2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="aspect-[4/5] sm:aspect-[4/3] w-1/2 h-full sm:w-full sm:h-1/2 overflow-hidden group">
                            <img src="/teamhero3.jpg" alt="teamhero3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    </div>
                    <div className="flex sm:flex-col gap-1 sm:w-1/4">
                        <div className="aspect-[4/5] sm:aspect-[4/3] w-1/2 h-full sm:w-full sm:h-1/2 overflow-hidden group">
                            <img src="/teamhero4.jpg" alt="teamhero4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="aspect-[4/5] sm:aspect-[4/3] w-1/2 h-full sm:w-full sm:h-1/2 overflow-hidden group">
                            <img src="/teamhero5.jpg" alt="teamhero5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col gap-12">
                    <div className="layout-flex items-center justify-center gap-2.5">
                        <h2 className="text-4xl text-center max-w-2xs sm:max-w-sm">Meet Our Team</h2>
                        <p className="text-[#737373] text-center font-normal max-w-2xs sm:max-w-md md:max-w-lg">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-12 px-9 md:max-w-5xl md:mx-auto lg:px-0 sm:gap-5">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="flex flex-col gap-2.5 justify-center items-center sm:w-[calc(50%-15px)] md:w-[30%] lg:w-[calc(25%-22.5px)]">
                                <div className="aspect-[3/4] sm:aspect-[2/3] w-full">
                                    <img src={member.img} alt={member.name} className="w-full h-full rounded-sm object-cover object-top" />
                                </div>
                                <div className="flex flex-col items-start w-full font-normal gap-2.5">
                                    <h4 className="text-xl font-normal">{member.name}</h4>
                                    <p className="text-[#737373] font-normal">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="layout-flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-7 max-w-2xs md:max-w-lg">
                        <h2 className="text-4xl text-center max-w-xs sm:max-w-sm md:max-w-lg">Start your 14 days free trial</h2>
                        <p className="text-[#737373] text-center font-normal max-w-2xs sm:max-w-md">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                        <button className="text-white border border-[#23A6F0] bg-[#23A6F0] rounded-sm py-4 px-9 transition-colors duration-300 hover:bg-[#1d91d1] hover:text-white cursor-pointer">Try it free now</button>
                        <div className="flex flex-row items-center justify-center gap-8">
                            <FaTwitter className="w-7.5 h-7.5 text-[#55ACEE] cursor-pointer transition-color duration-200 hover:opacity-70" />
                            <FaFacebookSquare className="w-7.5 h-7.5 text-[#395185] cursor-pointer transition-color duration-200 hover:opacity-70" />
                            <FaInstagram className="w-7.5 h-7.5 cursor-pointer transition-color duration-200 hover:opacity-70" />
                            <FaLinkedin className="w-7.5 h-7.5 text-[#0A66C2] cursor-pointer transition-color duration-200 hover:opacity-70" />
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}
export default TeamPage;