import ProductCard from "./ProductCard";

function Products() {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="layout-flex gap-[48px] py-20">
                <div className="flex flex-col items-center justify-center gap-2.5">
                    <h4 className="text-xl text-[#737373] text-center font-normal">Featured Products</h4>
                    <h3 className="text-2xl text-center w-3xs sm:w-full">BESTSELLER PRODUCTS</h3>
                    <p className="text-sm text-[#737373] text-center w-3xs sm:w-full font-normal">Problems trying to resolve the conflict between</p>
                </div>
                <div className="flex flex-wrap justify-center gap-[30px] md:justify-between sm:flex-row sm:flex-wrap ">
                    <ProductCard productId={1} />
                    <ProductCard productId={2} />
                    <ProductCard productId={3} />
                    <ProductCard productId={4} />
                    <ProductCard productId={5} />
                    <ProductCard productId={6} />
                    <ProductCard productId={7} />
                    <ProductCard productId={8} />

                </div>
            </div>
        </div>

    )
}
export default Products;