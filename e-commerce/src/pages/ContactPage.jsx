import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactPage() {
    const officeCards = [
        {
            icon: Phone,
            email: "georgia.young@example.com",
            secondEmail: "georgia.young@ple.com",
            dark: false,
        },
        {
            icon: MapPin,
            email: "georgia.young@example.com",
            secondEmail: "georgia.young@ple.com",
            dark: true,
        },
        {
            icon: Mail,
            email: "georgia.young@example.com",
            secondEmail: "georgia.young@ple.com",
            dark: false,
        },
    ];
    return (
        <>
            <section className="bg-white py-8">
                <div className="layout-flex gap-7 md:flex-row md:justify-between">
                    <div className="flex flex-col w-full items-center  py-6 md:py-0 justify-center md:items-start md:max-w-sm gap-10">
                        <h5 className="text-base text-center">CONTACT US</h5>
                        <h2 className="text-4xl text-center md:text-5xl md:text-left">Get in touch today!</h2>
                        <h4 className="text-xl text-[#737373] text-center md:text-left">We know how large objects will act, but things on a small scale just do not act that way.</h4>
                        <div className="flex flex-col justify-center items-center md:items-start gap-5 text-2xl">
                            <p>Phone : +451 215 215 </p>
                            <p>Fax : +451 215 215</p>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-8">
                            <FaTwitter className="w-7.5 h-7.5" />
                            <FaFacebookSquare className="w-7.5 h-7.5" />
                            <FaInstagram className="w-7.5 h-7.5" />
                            <FaLinkedin className="w-7.5 h-7.5" />
                        </div>
                    </div>
                    <div className="relative z-0 aspect-[4/5] md:max-w-[50%] ">
                        <img src="/contact.png" alt="" className="relative z-10 w-full h-full object-cover" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[10%] left-[10%] w-[80%]" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[2%] left-[2%] w-[10%]" />
                        <div className="absolute aspect-square rounded-full bg-[#FFE9EA] -z-10 top-[40%] right-[2%] w-[5%]" />
                        <div className="absolute aspect-square rounded-full bg-[#977DF4] -z-10 top-[20%] right-[1%] w-[2%]" />
                        <div className="absolute aspect-square rounded-full bg-[#977DF4] -z-10 bottom-[30%] left-[5%] w-[2%]" />
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFAFA] flex flex-col gap-20 py-40">
                <div className="layout-flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-2.5 max-w-2xs md:max-w-lg">
                        <h6 className="text-center">VISIT OUR OFFICE</h6>
                        <h2 className="text-4xl text-center">We help small businesses with big ideas</h2>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-0 w-full px-9 md:max-w-5xl md:mx-auto lg:px-0">
                    {officeCards.map((card, index) => {
                        const Icon = card.icon;
                        return (<div key={index} className={`flex flex-col justify-center items-center w-full rounded-sm gap-4 aspect-3/4 max-w-xs  ${card.dark ? "bg-[#252B42]" : "bg-white"} `}>
                            <Icon className="w-18 h-18 text-[#23A6F0]" />
                            <div className={`flex flex-col justify-center items-center gap-2 ${card.dark ? "text-white" : ""}`}>
                                <p className="">{card.email}</p>
                                <p>{card.secondEmail}</p>
                            </div>
                            <h5 className={`text-base ${card.dark ? "text-white" : ""}`}>Get Support</h5>
                            <button className="text-[#23A6F0] border border-[#23A6F0] rounded-full py-4 px-9 transition-colors duration-300 hover:bg-[#1d91d1] hover:text-white cursor-pointer">Submit Request</button>
                        </div>)
                    })}
                </div>
            </section>

            <section className="bg-white py-40">
                <div className="layout-flex items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-7 max-w-2xs md:max-w-lg">
                        <img src="/arrow.png" alt="arrow" className="w-[72px] object-contain mb-4" />
                        <h5 className="text-base text-center">WE Can't WAIT TO MEET YOU</h5>
                        <h1 className="text-6xl text-center">Let’s Talk</h1>
                        <button className="text-white border border-[#23A6F0] bg-[#23A6F0] rounded-sm py-4 px-9 transition-colors duration-300 hover:bg-[#1d91d1] hover:text-white cursor-pointer">Try it free now</button>
                    </div>
                </div>
            </section>
        </>


    )
}
export default ContactPage;