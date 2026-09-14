import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../store/actions/shoppingCartActions";
const COLOR_OPTIONS = [
    { value: "blue", bgClass: "bg-[#23A6F0]", ringClass: "peer-checked:ring-[#23A6F0]" },
    { value: "green", bgClass: "bg-[#23856D]", ringClass: "peer-checked:ring-[#23856D]" },
    { value: "orange", bgClass: "bg-[#E77C40]", ringClass: "peer-checked:ring-[#E77C40]" },
    { value: "black", bgClass: "bg-[#252B42]", ringClass: "peer-checked:ring-[#252B42]" },
];
function ProductOverview({ product }) {
    const dispatch = useDispatch();
    const [color, setColor] = useState("blue");
    function handleChange(event) {
        setColor(event.target.value);
    }
    if (!product) return null;
    const currentPrice = product.price ? Number(product.price).toFixed(2) : "0.00";
    const descriptionText = product.description || "";

    const rating = Number(product.rating || 0);
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
    const stars = (stars) => Array.from({ length: stars }, (_, i) => i + 1);




    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success("The product has been successfully added to your cart");
    }
    return (
        <div className="flex flex-col w-full gap-4">
            <h4 className="text-xl">{product.name}</h4>
            <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row items-center gap-1">
                    {stars(fullStars).map((star, index) => (
                        <FaStar
                            key={index}
                            className="w-5 h-5 text-[#F3CD03]"
                        />
                    ))}
                    {halfStars && (
                        <FaStarHalfStroke
                            className="w-5 h-5 text-[#F3CD03]"
                        />
                    )}
                    {stars(emptyStars).map((star, index) => (
                        <FaRegStar
                            key={index}
                            className="w-5 h-5 text-[#F3CD03]"
                        />
                    ))}

                </div>
                <h6 className="text-[#737373]">{product.sell_count} Reviews</h6>
            </div>
            <h3 className="text-2xl">${currentPrice}</h3>
            <div className="flex gap-2">
                <h6 className="text-[#737373]">Availability : </h6>
                {product.stock > 0 ?
                    <h6 className="text-[#23A6F0]">In Stock</h6>
                    : <h6 className="text-[red]">Out of Stock</h6>}

            </div>
            <p className="text-left text-[#737373] font-normal max-w-xs sm:max-w-md">{descriptionText}</p>
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
                <button className="text-white bg-[#23A6F0] transition-colors duration-300 hover:bg-[#1d91d1] cursor-pointer px-6 py-3 rounded-sm w-full sm:w-auto"
                    onClick={() => handleAddToCart(product)}
                >Select Options</button>
                <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer ">
                    <Heart className="w-5 h-5" />
                </div>
                <div className="border border-[#E8E8E8] rounded-full p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                    <ShoppingCart className="w-5 h-5" onClick={() => handleAddToCart(product)} />
                </div>  <div className="border border-[#E8E8E8] rounded-full  p-2 transition-colors duration-300 hover:bg-gray-100 cursor-pointer">
                    <Eye className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}
export default ProductOverview;