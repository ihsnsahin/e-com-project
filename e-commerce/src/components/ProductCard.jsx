function ProductCard() {
    return (
        <div className="flex flex-col items-center justify-center w-full sm:w-[calc(50%-15px)] lg:w-[calc(25%-22.5px)]">
            <div className="w-full h-[427px]">
                <img src="/product.jpg" alt="product" className="w-full h-full object-contain lg:object-cover" />
            </div>

            <div className="flex flex-col gap-[10px] items-center justify-center py-6">
                <h5 className="text-base">Graphic Design</h5>
                <span className="text-sm text-[#737373]">English Department</span>
                <div className="flex gap-2">
                    <h5 className="text-base text-[#BDBDBD]">$16.48</h5>
                    <h5 className="text-base  text-[#23856D]">$6.48</h5>
                </div>
                <div className="flex gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer inline-block" />
                    <span className="w-4 h-4 rounded-full bg-[#23856D] cursor-pointer inline-block" />
                    <span className="w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer inline-block" />
                    <span className="w-4 h-4 rounded-full bg-[#252B42] cursor-pointer inline-block" />
                </div>
            </div>
        </div>
    )
}
export default ProductCard;