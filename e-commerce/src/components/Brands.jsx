import { FaAws, FaHooli, FaLyft, FaPiedPiperHat, FaRedditAlien, FaStripe } from "react-icons/fa";

function Brands() {
    return (
        <section className="bg-[#FAFAFA] py-8">
            <div className="layout-flex items-center justify-center gap-7 sm:flex-row sm:justify-between">
                <FaHooli className="text-8xl text-[#737373] text-center" />
                <FaLyft className="text-8xl text-[#737373] text-center" />
                <FaPiedPiperHat className="text-8xl text-[#737373] text-center" />
                <FaStripe className="text-8xl text-[#737373] text-center" />
                <FaAws className="text-8xl text-[#737373] text-center" />
                <FaRedditAlien className="text-8xl text-[#737373] text-center" />
            </div>
        </section>
    )
}
export default Brands;