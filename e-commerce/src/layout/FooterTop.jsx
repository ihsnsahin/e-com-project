import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterTop() {
    return (
        <section className="bg-[#FAFAFA]">
            <div className="w-full px-9 py-10 hero:px-0 sm:max-w-5xl sm:m-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2.5 sm:gap-0">
                    <h3 className="text-2xl text-[#252B42] py-3 pr-32">Bandage</h3>
                    <div className="flex items-center gap-3 sm:px-15">
                        <FaFacebook className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                        <FaInstagram className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                        <FaTwitter className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FooterTop;