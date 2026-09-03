import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
const COLOR_OPTIONS = [
    { value: "blue", bgClass: "bg-[#23A6F0]", ringClass: "peer-checked:ring-[#23A6F0]" },
    { value: "green", bgClass: "bg-[#23856D]", ringClass: "peer-checked:ring-[#23856D]" },
    { value: "orange", bgClass: "bg-[#E77C40]", ringClass: "peer-checked:ring-[#E77C40]" },
    { value: "black", bgClass: "bg-[#252B42]", ringClass: "peer-checked:ring-[#252B42]" },
];
function ProductOverview() {
    const [color, setColor] = useState("blue");
    function handleChange(event) {
        setColor(event.target.value);
    }
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-xl">Floating Phone</h4>
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row items-center gap-1">
                    <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                    <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                    <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                    <Star className="text-[#F3CD03] fill-[#F3CD03]" />
                    <Star className="text-[#F3CD03]" />
                </div>
                <h6 className="text-[#737373]">10 Reviews</h6>
            </div>
            <h3 className="text-2xl">$1,139.33</h3>
            <div className="flex gap-2">
                <h6 className="text-[#737373]">Availability : </h6>
                <h6 className="text-[#23A6F0]">In Stock</h6>
            </div>
            <p className="text-left text-[#737373] font-normal max-w-xs sm:max-w-md">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie Excitation venial consequent sent nostrum met.</p>
            <hr className="border-[#E8E8E8] my-2" />
            <div className="flex gap-2">
                {COLOR_OPTIONS.map((item) => (
                    <label key={item.value} className="cursor-pointer">
                        <input
                            type="radio"
                            name={`product-color`}
                            value={item.value}
                            onChange={handleChange}
                            checked={color === item.value}
                            className="sr-only peer"
                        />
                        <span className={`w-4 h-4 rounded-full inline-block peer-checked:ring-2 peer-checked:ring-offset-2 ${item.bgClass} ${item.ringClass}`} />
                    </label>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <button className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto">Select Options</button>
                <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer ">
                    <Heart className="w-5 h-5" />
                </div>
                <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                    <ShoppingCart className="w-5 h-5" />
                </div>  <div className="border border-[#E8E8E8] rounded-full  p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                    <Eye className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}
export default ProductOverview;