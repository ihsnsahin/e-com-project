import { useState } from "react";
import { useHistory } from "react-router-dom";

function ProductCard({ product, viewMode }) {
    const history = useHistory();
    const [color, setColor] = useState("blue");
    function handleChange(event) {
        setColor(event.target.value);
    }
    const COLOR_OPTIONS = [
        { value: "blue", bgClass: "bg-[#23A6F0]", ringClass: "peer-checked:ring-[#23A6F0]" },
        { value: "green", bgClass: "bg-[#23856D]", ringClass: "peer-checked:ring-[#23856D]" },
        { value: "orange", bgClass: "bg-[#E77C40]", ringClass: "peer-checked:ring-[#E77C40]" },
        { value: "black", bgClass: "bg-[#252B42]", ringClass: "peer-checked:ring-[#252B42]" },
    ];
    const handleProductClick = (e) => {
        e.stopPropagation();
        history.push(`/shop/${product.id}`);
    }
    return (
        <div className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${viewMode === 'list'
            ? 'w-full sm:flex-row shadow-xs rounded-xs hover:shadow-lg p-4 gap-6 justify-start items-center'
            : 'w-full transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]'
            }`}
            onClick={handleProductClick}>
            <div className={`relative overflow-hidden sm:overflow-visible group ${viewMode === 'list'
                ? 'w-50 h-62.5rink-0'
                : 'w-full h-106.75'
                }`}>
                <img
                    src={product.img}
                    alt="product"
                    className="w-full h-full object-contain lg:object-cover"
                />
                <div className="absolute inset-0 bg-[#23A6F0] opacity-0 group-hover:opacity-15 transition-transform duration-500 ease-in-out"></div>
            </div>
            <div className={`flex flex-col gap-2.5 py-6 ${viewMode === 'list'
                ? 'items-start justify-start flex-1 text-left'
                : 'items-center justify-center'
                }`}>
                <h5 className="text-base">{product.title}</h5>
                <span className="text-sm text-[#737373]">{product.department}</span>
                <div className="flex gap-2">
                    <h5 className="text-base text-[#BDBDBD]">{product.oldPrice}</h5>
                    <h5 className="text-base text-[#23856D]">{product.price}</h5>
                </div>
                <div className="flex gap-2">
                    {COLOR_OPTIONS.map((item) => (
                        <label key={item.value} className="cursor-pointer">
                            <input
                                type="radio"
                                name={`product-color-${product.id}`}
                                value={item.value}
                                onChange={handleChange}
                                checked={color === item.value}
                                className="sr-only peer"
                            />
                            <span className={`w-4 h-4 rounded-full inline-block peer-checked:ring-2 peer-checked:ring-offset-2 ${item.bgClass} ${item.ringClass}`} />
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductCard;