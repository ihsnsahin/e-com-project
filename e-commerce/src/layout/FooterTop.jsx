import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterTop() {
    return (
        <section className="bg-[#FAFAFA]">
            <div className="layout-flex py-10 sm:flex-row sm:justify-between gap-2.5 sm:gap-0 hero:px-0">
                <h3 className="text-2xl text-[#252B42] py-3 pr-32">Bandage</h3>
                <div className="flex items-center gap-3 sm:px-15">
                    <FaFacebook className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                    <FaInstagram className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                    <FaTwitter className="w-5 h-5 text-[#23A6F0] cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                </div>
            </div>
        </section>
    )
}
export default FooterTop;