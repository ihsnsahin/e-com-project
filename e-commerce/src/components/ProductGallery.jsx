import { useState } from "react";

function ProductGallery({ product }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = product?.images ?? [];
    const currentImage = images[activeIndex]?.url || images[0]?.url;

    return (
        <div className="flex flex-col gap-10 w-full sm:max-w-[50%]">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-xs">
                <img src={currentImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-start gap-5 cursor-pointer">
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`aspect-[4/3] w-24 overflow-hidden rounded-xs transition-all duration-200 border ${activeIndex === index
                            ? "border-[#23A6F0] opacity-100"
                            : "border-transparent opacity-60 hover:opacity-100"
                            }`}>
                        <img src={img?.url} alt={`${product.name}-${index + 1}`} className="w-full h-full object-cover" />
                    </div>)
                )}
            </div>
        </div>
    )
}
export default ProductGallery;
