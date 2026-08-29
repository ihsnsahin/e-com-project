import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function HeaderTop() {
    return (
        <div className="hidden lg:flex justify-between items-center bg-[#252B42] text-[#FFFFFF] text-sm px-9 py-3">
            <div className="flex gap-5">
                <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4" />
                    <span> (225) 555-0118</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    <span>michelle.rivera@example.com</span>
                </div>
            </div>
            <p>Follow Us and get a chance to win 80% off</p>
            <div className="flex items-center gap-3">
                <span>Follow Us :</span>
                <FaInstagram className="w-4 h-4 cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                <FaYoutube className="w-4 h-4 cursor-pointer bg-[#252B42] transition-opacity duration-300 ease-out hover:opacity-50" />
                <FaFacebook className="w-4 h-4 cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
                <FaTwitter className="w-4 h-4 cursor-pointer transition-opacity duration-300 ease-out hover:opacity-50" />
            </div>
        </div>
    )
}
export default HeaderTop;