function ProductGallery() {
    return (
        <div className="flex flex-col gap-10 w-full sm:max-w-[50%]">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-xs">
                <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-start gap-5 cursor-pointer">
                <div className="aspect-[4/3] w-24 overflow-hidden rounded-xs">
                    <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] w-24 overflow-hidden rounded-xs cursor-pointer">
                    <img src="/productdetail.jpg" alt="productdetail" className="w-full h-full object-cover opacity-70 hover:opacity-100" />
                </div>
            </div>
        </div>
    )
}
export default ProductGallery;