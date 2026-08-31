import { useState } from "react";

function ProductCard({ productId }) {
    const [color, setColor] = useState("blue");
    function handleChange(event) {
        setColor(event.target.value);
    }
    return (
        <div className="flex flex-col items-center justify-center w-full sm:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]">
            <div className="w-full h-[427px] group">
                <img src="/product.jpg" alt="product" className="w-full h-full object-contain lg:object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>

            <div className="flex flex-col gap-[10px] items-center justify-center py-6">
                <h5 className="text-base">Graphic Design</h5>
                <span className="text-sm text-[#737373]">English Department</span>
                <div className="flex gap-2">
                    <h5 className="text-base text-[#BDBDBD]">$16.48</h5>
                    <h5 className="text-base  text-[#23856D]">$6.48</h5>
                </div>
                <div className="flex gap-2">
                    <label className="cursor-pointer">
                        <input type="radio" name={`product-color-${productId}`} value="blue" onChange={handleChange} checked={color === "blue"} className="sr-only peer" />
                        <span className="w-4 h-4 rounded-full bg-[#23A6F0] inline-block peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-[#23A6F0]" />
                    </label>

                    <label className="cursor-pointer">
                        <input type="radio" name={`product-color-${productId}`} value="green" onChange={handleChange} checked={color === "green"} className="sr-only peer" />
                        <span className="w-4 h-4 rounded-full bg-[#23856D] inline-block peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-[#23856D]" />
                    </label>

                    <label className="cursor-pointer">
                        <input type="radio" name={`product-color-${productId}`} value="orange" onChange={handleChange} checked={color === "orange"} className="sr-only peer" />
                        <span className="w-4 h-4 rounded-full bg-[#E77C40] inline-block peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-[#E77C40]" />
                    </label>

                    <label className="cursor-pointer">
                        <input type="radio" name={`product-color-${productId}`} value="black" onChange={handleChange} checked={color === "black"} className="sr-only peer" />
                        <span className="w-4 h-4 rounded-full bg-[#252B42] inline-block peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-[#252B42]" />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;